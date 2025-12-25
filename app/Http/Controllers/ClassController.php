<?php

namespace App\Http\Controllers;

use App\Models\ClassModel;
use App\Models\Department;
use Illuminate\Http\Request;

class ClassController extends Controller
{
    public function index()
    {
        $classes = ClassModel::with('department')->latest()->paginate(15);
        return view('classes.index', compact('classes'));
    }

    public function create()
    {
        $departments = Department::all();
        return view('classes.create', compact('departments'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'code' => 'required|string|max:255|unique:classes,code',
            'department_id' => 'nullable|exists:departments,id',
            'academic_year' => 'required|integer',
            'semester' => 'required|in:fall,spring,summer',
            'capacity' => 'required|integer|min:1',
        ]);

        ClassModel::create($validated);

        return redirect()->route('classes.index')
            ->with('success', 'Class created successfully.');
    }

    public function show(ClassModel $class)
    {
        $class->load('department');
        return view('classes.show', compact('class'));
    }

    public function edit(ClassModel $class)
    {
        $departments = Department::all();
        return view('classes.edit', compact('class', 'departments'));
    }

    public function update(Request $request, ClassModel $class)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'code' => 'required|string|max:255|unique:classes,code,' . $class->id,
            'department_id' => 'nullable|exists:departments,id',
            'academic_year' => 'required|integer',
            'semester' => 'required|in:fall,spring,summer',
            'capacity' => 'required|integer|min:1',
        ]);

        $class->update($validated);

        return redirect()->route('classes.index')
            ->with('success', 'Class updated successfully.');
    }

    public function destroy(ClassModel $class)
    {
        $class->delete();

        return redirect()->route('classes.index')
            ->with('success', 'Class deleted successfully.');
    }
}

