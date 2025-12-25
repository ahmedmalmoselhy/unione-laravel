@extends('layouts.dashboard')

@section('title', 'Edit Class')

@section('content')
<div class="max-w-2xl">
    <h1 class="text-3xl font-bold text-gray-900 mb-6">Edit Class</h1>
    <form action="{{ route('classes.update', $class) }}" method="POST" class="bg-white shadow rounded-lg p-6">
        @csrf @method('PUT')
        <div class="space-y-6">
            <div>
                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" name="name" id="name" value="{{ old('name', $class->name) }}" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            </div>
            <div>
                <label for="code" class="block text-sm font-medium text-gray-700">Code</label>
                <input type="text" name="code" id="code" value="{{ old('code', $class->code) }}" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            </div>
            <div>
                <label for="department_id" class="block text-sm font-medium text-gray-700">Department</label>
                <select name="department_id" id="department_id" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                    <option value="">None</option>
                    @foreach($departments as $dept)
                        <option value="{{ $dept->id }}" {{ old('department_id', $class->department_id) == $dept->id ? 'selected' : '' }}>{{ $dept->name }}</option>
                    @endforeach
                </select>
            </div>
            <div>
                <label for="academic_year" class="block text-sm font-medium text-gray-700">Academic Year</label>
                <input type="number" name="academic_year" id="academic_year" value="{{ old('academic_year', $class->academic_year) }}" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            </div>
            <div>
                <label for="semester" class="block text-sm font-medium text-gray-700">Semester</label>
                <select name="semester" id="semester" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                    <option value="fall" {{ old('semester', $class->semester) == 'fall' ? 'selected' : '' }}>Fall</option>
                    <option value="spring" {{ old('semester', $class->semester) == 'spring' ? 'selected' : '' }}>Spring</option>
                    <option value="summer" {{ old('semester', $class->semester) == 'summer' ? 'selected' : '' }}>Summer</option>
                </select>
            </div>
            <div>
                <label for="capacity" class="block text-sm font-medium text-gray-700">Capacity</label>
                <input type="number" name="capacity" id="capacity" value="{{ old('capacity', $class->capacity) }}" required min="1" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            </div>
            <div class="flex justify-end space-x-3">
                <a href="{{ route('classes.index') }}" class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">Cancel</a>
                <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Update Class</button>
            </div>
        </div>
    </form>
</div>
@endsection

