@extends('layouts.dashboard')

@section('title', 'View Employee')

@section('content')
<div class="max-w-2xl">
    <div class="mb-6 flex justify-between items-center">
        <h1 class="text-3xl font-bold text-gray-900">{{ $employee->name }}</h1>
        <div class="space-x-3">
            <a href="{{ route('employees.edit', $employee) }}" class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Edit</a>
            <a href="{{ route('employees.index') }}" class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">Back</a>
        </div>
    </div>
    <div class="bg-white shadow rounded-lg p-6 space-y-6">
        <div><label class="block text-sm font-medium text-gray-700">Email</label><p class="mt-1 text-sm text-gray-900">{{ $employee->email }}</p></div>
        <div>
            <label class="block text-sm font-medium text-gray-700">Faculties</label>
            <div class="mt-1">
                @if($employee->employeeFaculties->isNotEmpty())
                    @foreach($employee->employeeFaculties as $faculty)
                        <span class="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded mr-2">{{ $faculty->name }}</span>
                    @endforeach
                @else
                    <span class="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded">University Level</span>
                @endif
            </div>
        </div>
        @if($employee->employeeFaculties->isNotEmpty() && $employee->employeeFaculties->first()->pivot->position)
        <div><label class="block text-sm font-medium text-gray-700">Position</label><p class="mt-1 text-sm text-gray-900">{{ $employee->employeeFaculties->first()->pivot->position }}</p></div>
        @endif
    </div>
</div>
@endsection

