<?php

namespace App\Http\Controllers;

use App\Models\Faculty;
use Illuminate\Http\Request;

class FacultyController extends Controller
{
    public function index()
    {
        $faculties = Faculty::latest()->paginate(15);
        return view('faculties.index', compact('faculties'));
    }

    public function create()
    {
        return view('faculties.create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'code' => 'required|string|max:255|unique:faculties,code',
            'description' => 'nullable|string',
        ]);

        Faculty::create($validated);

        return redirect()->route('faculties.index')
            ->with('success', 'Faculty created successfully.');
    }

    public function show(Faculty $faculty)
    {
        return view('faculties.show', compact('faculty'));
    }

    public function edit(Faculty $faculty)
    {
        return view('faculties.edit', compact('faculty'));
    }

    public function update(Request $request, Faculty $faculty)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'code' => 'required|string|max:255|unique:faculties,code,' . $faculty->id,
            'description' => 'nullable|string',
        ]);

        $faculty->update($validated);

        return redirect()->route('faculties.index')
            ->with('success', 'Faculty updated successfully.');
    }

    public function destroy(Faculty $faculty)
    {
        $faculty->delete();

        return redirect()->route('faculties.index')
            ->with('success', 'Faculty deleted successfully.');
    }
}

