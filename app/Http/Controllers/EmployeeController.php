<?php

namespace App\Http\Controllers;

use App\Models\Faculty;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class EmployeeController extends Controller
{
    public function index()
    {
        $employees = User::where('role', 'employee')
            ->latest()
            ->paginate(15);
        return view('employees.index', compact('employees'));
    }

    public function create()
    {
        $faculties = Faculty::all();
        return view('employees.create', compact('faculties'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
            'faculties' => 'nullable|array',
            'faculties.*' => 'exists:faculties,id',
            'is_university_level' => 'boolean',
            'position' => 'nullable|string|max:255',
        ]);

        $validated['password'] = Hash::make($validated['password']);
        $validated['role'] = 'employee';
        $faculties = $validated['faculties'] ?? [];
        $isUniversityLevel = $request->has('is_university_level') ? true : false;
        $position = $validated['position'] ?? null;
        
        unset($validated['faculties'], $validated['is_university_level'], $validated['position']);

        $employee = User::create($validated);
        
        if ($isUniversityLevel) {
            $employee->employeeFaculties()->sync([]);
        } else {
            $syncData = [];
            foreach ($faculties as $facultyId) {
                $syncData[$facultyId] = [
                    'is_university_level' => false,
                    'position' => $position,
                ];
            }
            $employee->employeeFaculties()->sync($syncData);
        }

        return redirect()->route('employees.index')
            ->with('success', 'Employee created successfully.');
    }

    public function show(User $employee)
    {
        $employee->load('employeeFaculties');
        return view('employees.show', compact('employee'));
    }

    public function edit(User $employee)
    {
        $faculties = Faculty::all();
        $employee->load('employeeFaculties');
        return view('employees.edit', compact('employee', 'faculties'));
    }

    public function update(Request $request, User $employee)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $employee->id,
            'password' => 'nullable|string|min:8|confirmed',
            'faculties' => 'nullable|array',
            'faculties.*' => 'exists:faculties,id',
            'is_university_level' => 'boolean',
            'position' => 'nullable|string|max:255',
        ]);

        if (!empty($validated['password'])) {
            $validated['password'] = Hash::make($validated['password']);
        } else {
            unset($validated['password']);
        }

        $faculties = $validated['faculties'] ?? [];
        $isUniversityLevel = $request->has('is_university_level') ? true : false;
        $position = $validated['position'] ?? null;
        
        unset($validated['faculties'], $validated['is_university_level'], $validated['position']);

        $employee->update($validated);
        
        if ($isUniversityLevel) {
            $employee->employeeFaculties()->sync([]);
        } else {
            $syncData = [];
            foreach ($faculties as $facultyId) {
                $syncData[$facultyId] = [
                    'is_university_level' => false,
                    'position' => $position,
                ];
            }
            $employee->employeeFaculties()->sync($syncData);
        }

        return redirect()->route('employees.index')
            ->with('success', 'Employee updated successfully.');
    }

    public function destroy(User $employee)
    {
        $employee->delete();

        return redirect()->route('employees.index')
            ->with('success', 'Employee deleted successfully.');
    }
}

