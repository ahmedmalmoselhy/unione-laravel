<?php

namespace App\Http\Controllers;

use App\Models\Department;
use App\Models\Faculty;
use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    public function index()
    {
        $departments = Department::with('faculty')->latest()->paginate(15);
        return view('departments.index', compact('departments'));
    }

    public function create()
    {
        $faculties = Faculty::all();
        return view('departments.create', compact('faculties'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'code' => 'required|string|max:255|unique:departments,code',
            'faculty_id' => 'nullable|exists:faculties,id',
            'description' => 'nullable|string',
            'is_general' => 'boolean',
        ]);

        Department::create($validated);

        return redirect()->route('departments.index')
            ->with('success', 'Department created successfully.');
    }

    public function show(Department $department)
    {
        $department->load('faculty');
        return view('departments.show', compact('department'));
    }

    public function edit(Department $department)
    {
        $faculties = Faculty::all();
        return view('departments.edit', compact('department', 'faculties'));
    }

    public function update(Request $request, Department $department)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'code' => 'required|string|max:255|unique:departments,code,' . $department->id,
            'faculty_id' => 'nullable|exists:faculties,id',
            'description' => 'nullable|string',
            'is_general' => 'boolean',
        ]);

        $department->update($validated);

        return redirect()->route('departments.index')
            ->with('success', 'Department updated successfully.');
    }

    public function destroy(Department $department)
    {
        $department->delete();

        return redirect()->route('departments.index')
            ->with('success', 'Department deleted successfully.');
    }
}

