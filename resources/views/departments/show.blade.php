@extends('layouts.dashboard')

@section('title', 'View Department')

@section('content')
<div class="max-w-2xl">
    <div class="mb-6 flex justify-between items-center">
        <div>
            <h1 class="text-3xl font-bold text-gray-900">{{ $department->name }}</h1>
            <p class="mt-2 text-sm text-gray-600">Department Details</p>
        </div>
        <div class="space-x-3">
            <a href="{{ route('departments.edit', $department) }}" class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Edit</a>
            <a href="{{ route('departments.index') }}" class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">Back</a>
        </div>
    </div>

    <div class="bg-white shadow rounded-lg p-6 space-y-6">
        <div>
            <label class="block text-sm font-medium text-gray-700">Code</label>
            <p class="mt-1 text-sm text-gray-900">{{ $department->code }}</p>
        </div>

        <div>
            <label class="block text-sm font-medium text-gray-700">Faculty</label>
            <p class="mt-1 text-sm text-gray-900">{{ $department->faculty->name ?? 'General Department' }}</p>
        </div>

        <div>
            <label class="block text-sm font-medium text-gray-700">Type</label>
            <p class="mt-1">
                @if($department->is_general)
                    <span class="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded">General</span>
                @else
                    <span class="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded">Faculty</span>
                @endif
            </p>
        </div>

        <div>
            <label class="block text-sm font-medium text-gray-700">Description</label>
            <p class="mt-1 text-sm text-gray-900">{{ $department->description ?? 'N/A' }}</p>
        </div>
    </div>
</div>
@endsection

