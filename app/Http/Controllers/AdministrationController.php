<?php

namespace App\Http\Controllers;

use App\Models\Department;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AdministrationController extends Controller
{
    public function index()
    {
        $administration = User::where('role', 'administration')
            ->latest()
            ->paginate(15);
        return view('administration.index', compact('administration'));
    }

    public function create()
    {
        $departments = Department::all();
        return view('administration.create', compact('departments'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
            'departments' => 'nullable|array',
            'departments.*' => 'exists:departments,id',
        ]);

        $validated['password'] = Hash::make($validated['password']);
        $validated['role'] = 'administration';
        $departments = $validated['departments'] ?? [];
        unset($validated['departments']);

        $admin = User::create($validated);
        $admin->professorDepartments()->sync($departments);

        return redirect()->route('administration.index')
            ->with('success', 'Administration user created successfully.');
    }

    public function show(User $administration)
    {
        $administration->load('professorDepartments');
        return view('administration.show', compact('administration'));
    }

    public function edit(User $administration)
    {
        $departments = Department::all();
        $administration->load('professorDepartments');
        return view('administration.edit', compact('administration', 'departments'));
    }

    public function update(Request $request, User $administration)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $administration->id,
            'password' => 'nullable|string|min:8|confirmed',
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

        $administration->update($validated);
        $administration->professorDepartments()->sync($departments);

        return redirect()->route('administration.index')
            ->with('success', 'Administration user updated successfully.');
    }

    public function destroy(User $administration)
    {
        $administration->delete();

        return redirect()->route('administration.index')
            ->with('success', 'Administration user deleted successfully.');
    }
}

