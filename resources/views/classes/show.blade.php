@extends('layouts.dashboard')

@section('title', 'View Class')

@section('content')
<div class="max-w-2xl">
    <div class="mb-6 flex justify-between items-center">
        <h1 class="text-3xl font-bold text-gray-900">{{ $class->name }}</h1>
        <div class="space-x-3">
            <a href="{{ route('classes.edit', $class) }}" class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Edit</a>
            <a href="{{ route('classes.index') }}" class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">Back</a>
        </div>
    </div>
    <div class="bg-white shadow rounded-lg p-6 space-y-6">
        <div><label class="block text-sm font-medium text-gray-700">Code</label><p class="mt-1 text-sm text-gray-900">{{ $class->code }}</p></div>
        <div><label class="block text-sm font-medium text-gray-700">Department</label><p class="mt-1 text-sm text-gray-900">{{ $class->department->name ?? 'N/A' }}</p></div>
        <div><label class="block text-sm font-medium text-gray-700">Academic Year</label><p class="mt-1 text-sm text-gray-900">{{ $class->academic_year }}</p></div>
        <div><label class="block text-sm font-medium text-gray-700">Semester</label><p class="mt-1 text-sm text-gray-900 capitalize">{{ $class->semester }}</p></div>
        <div><label class="block text-sm font-medium text-gray-700">Capacity</label><p class="mt-1 text-sm text-gray-900">{{ $class->capacity }}</p></div>
    </div>
</div>
@endsection

