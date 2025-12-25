@extends('layouts.dashboard')

@section('title', 'Students')

@section('content')
<div class="space-y-6">
    <div class="flex justify-between items-center">
        <div>
            <h1 class="text-3xl font-bold text-gray-900">Students</h1>
            <p class="mt-2 text-sm text-gray-600">Manage students</p>
        </div>
        <a href="{{ route('students.create') }}" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Add Student</a>
    </div>

    <div class="bg-white shadow rounded-lg overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
                <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Department</th>
                    <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                @forelse($students as $student)
                    <tr>
                        <td class="px-6 py-4 text-sm font-medium text-gray-900">{{ $student->name }}</td>
                        <td class="px-6 py-4 text-sm text-gray-500">{{ $student->email }}</td>
                        <td class="px-6 py-4 text-sm text-gray-500">
                            @if($student->studentDepartment->isNotEmpty())
                                {{ $student->studentDepartment->first()->name }}
                            @else
                                N/A
                            @endif
                        </td>
                        <td class="px-6 py-4 text-right text-sm font-medium">
                            <a href="{{ route('students.show', $student) }}" class="text-blue-600 hover:text-blue-900 mr-3">View</a>
                            <a href="{{ route('students.edit', $student) }}" class="text-indigo-600 hover:text-indigo-900 mr-3">Edit</a>
                            <form action="{{ route('students.destroy', $student) }}" method="POST" class="inline">
                                @csrf @method('DELETE')
                                <button type="submit" class="text-red-600 hover:text-red-900" onclick="return confirm('Are you sure?')">Delete</button>
                            </form>
                        </td>
                    </tr>
                @empty
                    <tr><td colspan="4" class="px-6 py-4 text-center text-sm text-gray-500">No students found.</td></tr>
                @endforelse
            </tbody>
        </table>
    </div>
    {{ $students->links() }}
</div>
@endsection

