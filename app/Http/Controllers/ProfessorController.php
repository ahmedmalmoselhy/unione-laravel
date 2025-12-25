<?php

namespace App\Http\Controllers;

use App\Models\Department;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class ProfessorController extends Controller
{
    public function index()
    {
        $professors = User::whereIn('role', ['professor', 'administration'])
            ->latest()
            ->paginate(15);
        return view('professors.index', compact('professors'));
    }

    public function create()
    {
        $departments = Department::all();
        return view('professors.create', compact('departments'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
            'role' => 'required|in:professor,administration',
            'departments' => 'nullable|array',
            'departments.*' => 'exists:departments,id',
        ]);

        $validated['password'] = Hash::make($validated['password']);
        $departments = $validated['departments'] ?? [];
        unset($validated['departments']);

        $professor = User::create($validated);
        $professor->professorDepartments()->sync($departments);

        return redirect()->route('professors.index')
            ->with('success', 'Professor created successfully.');
    }

    public function show(User $professor)
    {
        $professor->load('professorDepartments');
        return view('professors.show', compact('professor'));
    }

    public function edit(User $professor)
    {
        $departments = Department::all();
        $professor->load('professorDepartments');
        return view('professors.edit', compact('professor', 'departments'));
    }

    public function update(Request $request, User $professor)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $professor->id,
            'password' => 'nullable|string|min:8|confirmed',
            'role' => 'required|in:professor,administration',
            'departments' => 'nullable|array',
            'departments.*' => 'exists:departments,id',
        ]);

        if (!empty($validated['password'])) {
            $validated['password'] = Hash::make($validated['password']);
        } else {
            unset($validated['password']);
        }

        $departments = $validated['departments'] ?? [];
        unset($validated['departments']);

        $professor->update($validated);
        $professor->professorDepartments()->sync($departments);

        return redirect()->route('professors.index')
            ->with('success', 'Professor updated successfully.');
    }

    public function destroy(User $professor)
    {
        $professor->delete();

        return redirect()->route('professors.index')
            ->with('success', 'Professor deleted successfully.');
    }
}

