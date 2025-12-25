<?php

namespace App\Http\Controllers;

use App\Models\Department;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class StudentController extends Controller
{
    public function index()
    {
        $students = User::where('role', 'student')
            ->latest()
            ->paginate(15);
        return view('students.index', compact('students'));
    }

    public function create()
    {
        $departments = Department::all();
        return view('students.create', compact('departments'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
            'department_id' => 'nullable|exists:departments,id',
            'is_general' => 'boolean',
            'academic_year' => 'nullable|integer',
        ]);

        $validated['password'] = Hash::make($validated['password']);
        $validated['role'] = 'student';
        $departmentId = $validated['department_id'] ?? null;
        $isGeneral = $request->has('is_general') ? true : false;
        $academicYear = $validated['academic_year'] ?? null;
        
        unset($validated['department_id'], $validated['is_general'], $validated['academic_year']);

        $student = User::create($validated);
        
        if ($departmentId || $isGeneral) {
            $student->studentDepartment()->sync([
                $departmentId => [
                    'is_general' => $isGeneral,
                    'academic_year' => $academicYear,
                ]
            ]);
        }

        return redirect()->route('students.index')
            ->with('success', 'Student created successfully.');
    }

    public function show(User $student)
    {
        $student->load('studentDepartment');
        return view('students.show', compact('student'));
    }

    public function edit(User $student)
    {
        $departments = Department::all();
        $student->load('studentDepartment');
        return view('students.edit', compact('student', 'departments'));
    }

    public function update(Request $request, User $student)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $student->id,
            'password' => 'nullable|string|min:8|confirmed',
            'department_id' => 'nullable|exists:departments,id',
            'is_general' => 'boolean',
            'academic_year' => 'nullable|integer',
        ]);

        if (!empty($validated['password'])) {
            $validated['password'] = Hash::make($validated['password']);
        } else {
            unset($validated['password']);
        }

        $departmentId = $validated['department_id'] ?? null;
        $isGeneral = $request->has('is_general') ? true : false;
        $academicYear = $validated['academic_year'] ?? null;
        
        unset($validated['department_id'], $validated['is_general'], $validated['academic_year']);

        $student->update($validated);
        
        if ($departmentId || $isGeneral) {
            $student->studentDepartment()->sync([
                $departmentId => [
                    'is_general' => $isGeneral,
                    'academic_year' => $academicYear,
                ]
            ]);
        } else {
            $student->studentDepartment()->detach();
        }

        return redirect()->route('students.index')
            ->with('success', 'Student updated successfully.');
    }

    public function destroy(User $student)
    {
        $student->delete();

        return redirect()->route('students.index')
            ->with('success', 'Student deleted successfully.');
    }
}

