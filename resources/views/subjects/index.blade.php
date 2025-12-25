@extends('layouts.dashboard')

@section('title', 'Subjects')

@section('content')
<div class="space-y-6">
    <div class="flex justify-between items-center">
        <div>
            <h1 class="text-3xl font-bold text-gray-900">Subjects</h1>
            <p class="mt-2 text-sm text-gray-600">Manage subjects</p>
        </div>
        <a href="{{ route('subjects.create') }}" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Add Subject</a>
    </div>

    <div class="bg-white shadow rounded-lg overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
                <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Code</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Department</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Credits</th>
                    <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                @forelse($subjects as $subject)
                    <tr>
                        <td class="px-6 py-4 text-sm font-medium text-gray-900">{{ $subject->name }}</td>
                        <td class="px-6 py-4 text-sm text-gray-500">{{ $subject->code }}</td>
                        <td class="px-6 py-4 text-sm text-gray-500">{{ $subject->department->name ?? 'N/A' }}</td>
                        <td class="px-6 py-4 text-sm text-gray-500">{{ $subject->credits }}</td>
                        <td class="px-6 py-4 text-right text-sm font-medium">
                            <a href="{{ route('subjects.show', $subject) }}" class="text-blue-600 hover:text-blue-900 mr-3">View</a>
                            <a href="{{ route('subjects.edit', $subject) }}" class="text-indigo-600 hover:text-indigo-900 mr-3">Edit</a>
                            <form action="{{ route('subjects.destroy', $subject) }}" method="POST" class="inline">
                                @csrf @method('DELETE')
                                <button type="submit" class="text-red-600 hover:text-red-900" onclick="return confirm('Are you sure?')">Delete</button>
                            </form>
                        </td>
                    </tr>
                @empty
                    <tr><td colspan="5" class="px-6 py-4 text-center text-sm text-gray-500">No subjects found.</td></tr>
                @endforelse
            </tbody>
        </table>
    </div>
    {{ $subjects->links() }}
</div>
@endsection

