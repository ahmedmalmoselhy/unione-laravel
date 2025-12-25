@extends('layouts.dashboard')

@section('title', 'View Student')

@section('content')
<div class="max-w-2xl">
    <div class="mb-6 flex justify-between items-center">
        <h1 class="text-3xl font-bold text-gray-900">{{ $student->name }}</h1>
        <div class="space-x-3">
            <a href="{{ route('students.edit', $student) }}" class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Edit</a>
            <a href="{{ route('students.index') }}" class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">Back</a>
        </div>
    </div>
    <div class="bg-white shadow rounded-lg p-6 space-y-6">
        <div><label class="block text-sm font-medium text-gray-700">Email</label><p class="mt-1 text-sm text-gray-900">{{ $student->email }}</p></div>
        <div>
            <label class="block text-sm font-medium text-gray-700">Department</label>
            <p class="mt-1 text-sm text-gray-900">
                @if($student->studentDepartment->isNotEmpty())
                    {{ $student->studentDepartment->first()->name }}
                    @if($student->studentDepartment->first()->pivot->is_general)
                        <span class="ml-2 px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded">General</span>
                    @endif
                @else
                    N/A
                @endif
            </p>
        </div>
        @if($student->studentDepartment->isNotEmpty() && $student->studentDepartment->first()->pivot->academic_year)
        <div><label class="block text-sm font-medium text-gray-700">Academic Year</label><p class="mt-1 text-sm text-gray-900">{{ $student->studentDepartment->first()->pivot->academic_year }}</p></div>
        @endif
    </div>
</div>
@endsection

