@extends('layouts.dashboard')

@section('title', 'View Professor')

@section('content')
<div class="max-w-2xl">
    <div class="mb-6 flex justify-between items-center">
        <h1 class="text-3xl font-bold text-gray-900">{{ $professor->name }}</h1>
        <div class="space-x-3">
            <a href="{{ route('professors.edit', $professor) }}" class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Edit</a>
            <a href="{{ route('professors.index') }}" class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">Back</a>
        </div>
    </div>
    <div class="bg-white shadow rounded-lg p-6 space-y-6">
        <div><label class="block text-sm font-medium text-gray-700">Email</label><p class="mt-1 text-sm text-gray-900">{{ $professor->email }}</p></div>
        <div><label class="block text-sm font-medium text-gray-700">Role</label><p class="mt-1 text-sm text-gray-900 capitalize">{{ $professor->role }}</p></div>
        <div>
            <label class="block text-sm font-medium text-gray-700">Departments</label>
            <div class="mt-1">
                @forelse($professor->professorDepartments as $dept)
                    <span class="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded mr-2">{{ $dept->name }}</span>
                @empty
                    <p class="text-sm text-gray-500">No departments assigned</p>
                @endforelse
            </div>
        </div>
    </div>
</div>
@endsection

