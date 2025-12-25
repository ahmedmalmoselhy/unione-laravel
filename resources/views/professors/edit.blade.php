@extends('layouts.dashboard')

@section('title', 'Edit Professor')

@section('content')
<div class="max-w-2xl">
    <h1 class="text-3xl font-bold text-gray-900 mb-6">Edit Professor</h1>
    <form action="{{ route('professors.update', $professor) }}" method="POST" class="bg-white shadow rounded-lg p-6">
        @csrf @method('PUT')
        <div class="space-y-6">
            <div>
                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" name="name" id="name" value="{{ old('name', $professor->name) }}" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            </div>
            <div>
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" id="email" value="{{ old('email', $professor->email) }}" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            </div>
            <div>
                <label for="password" class="block text-sm font-medium text-gray-700">Password (leave blank to keep current)</label>
                <input type="password" name="password" id="password" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            </div>
            <div>
                <label for="password_confirmation" class="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input type="password" name="password_confirmation" id="password_confirmation" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            </div>
            <div>
                <label for="role" class="block text-sm font-medium text-gray-700">Role</label>
                <select name="role" id="role" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                    <option value="professor" {{ old('role', $professor->role) == 'professor' ? 'selected' : '' }}>Professor</option>
                    <option value="administration" {{ old('role', $professor->role) == 'administration' ? 'selected' : '' }}>Administration</option>
                </select>
            </div>
            <div>
                <label for="departments" class="block text-sm font-medium text-gray-700">Departments</label>
                <select name="departments[]" id="departments" multiple class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                    @foreach($departments as $dept)
                        <option value="{{ $dept->id }}" {{ in_array($dept->id, old('departments', $professor->professorDepartments->pluck('id')->toArray())) ? 'selected' : '' }}>{{ $dept->name }}</option>
                    @endforeach
                </select>
                <p class="mt-1 text-xs text-gray-500">Hold Ctrl/Cmd to select multiple</p>
            </div>
            <div class="flex justify-end space-x-3">
                <a href="{{ route('professors.index') }}" class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">Cancel</a>
                <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Update Professor</button>
            </div>
        </div>
    </form>
</div>
@endsection

