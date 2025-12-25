@extends('layouts.dashboard')

@section('title', 'Classes')

@section('content')
<div class="space-y-6">
    <div class="flex justify-between items-center">
        <div>
            <h1 class="text-3xl font-bold text-gray-900">Classes</h1>
            <p class="mt-2 text-sm text-gray-600">Manage classes</p>
        </div>
        <a href="{{ route('classes.create') }}" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Add Class</a>
    </div>

    <div class="bg-white shadow rounded-lg overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
                <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Code</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Department</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Year</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Semester</th>
                    <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                @forelse($classes as $classItem)
                    <tr>
                        <td class="px-6 py-4 text-sm font-medium text-gray-900">{{ $classItem->name }}</td>
                        <td class="px-6 py-4 text-sm text-gray-500">{{ $classItem->code }}</td>
                        <td class="px-6 py-4 text-sm text-gray-500">{{ $classItem->department->name ?? 'N/A' }}</td>
                        <td class="px-6 py-4 text-sm text-gray-500">{{ $classItem->academic_year }}</td>
                        <td class="px-6 py-4 text-sm text-gray-500 capitalize">{{ $classItem->semester }}</td>
                        <td class="px-6 py-4 text-right text-sm font-medium">
                            <a href="{{ route('classes.show', $classItem) }}" class="text-blue-600 hover:text-blue-900 mr-3">View</a>
                            <a href="{{ route('classes.edit', $classItem) }}" class="text-indigo-600 hover:text-indigo-900 mr-3">Edit</a>
                            <form action="{{ route('classes.destroy', $classItem) }}" method="POST" class="inline">
                                @csrf @method('DELETE')
                                <button type="submit" class="text-red-600 hover:text-red-900" onclick="return confirm('Are you sure?')">Delete</button>
                            </form>
                        </td>
                    </tr>
                @empty
                    <tr><td colspan="6" class="px-6 py-4 text-center text-sm text-gray-500">No classes found.</td></tr>
                @endforelse
            </tbody>
        </table>
    </div>
    {{ $classes->links() }}
</div>
@endsection

