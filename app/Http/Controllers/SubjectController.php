<?php

namespace App\Http\Controllers;

use App\Models\Department;
use App\Models\Subject;
use Illuminate\Http\Request;

class SubjectController extends Controller
{
    public function index()
    {
        $subjects = Subject::with('department')->latest()->paginate(15);
        return view('subjects.index', compact('subjects'));
    }

    public function create()
    {
        $departments = Department::all();
        return view('subjects.create', compact('departments'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'code' => 'required|string|max:255|unique:subjects,code',
            'department_id' => 'nullable|exists:departments,id',
            'description' => 'nullable|string',
            'credits' => 'required|integer|min:0',
        ]);

        Subject::create($validated);

        return redirect()->route('subjects.index')
            ->with('success', 'Subject created successfully.');
    }

    public function show(Subject $subject)
    {
        $subject->load('department');
        return view('subjects.show', compact('subject'));
    }

    public function edit(Subject $subject)
    {
        $departments = Department::all();
        return view('subjects.edit', compact('subject', 'departments'));
    }

    public function update(Request $request, Subject $subject)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'code' => 'required|string|max:255|unique:subjects,code,' . $subject->id,
            'department_id' => 'nullable|exists:departments,id',
            'description' => 'nullable|string',
            'credits' => 'required|integer|min:0',
        ]);

        $subject->update($validated);

        return redirect()->route('subjects.index')
            ->with('success', 'Subject updated successfully.');
    }

    public function destroy(Subject $subject)
    {
        $subject->delete();

        return redirect()->route('subjects.index')
            ->with('success', 'Subject deleted successfully.');
    }
}

