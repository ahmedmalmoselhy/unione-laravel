@extends('layouts.dashboard')

@section('title', 'Lectures')

@section('content')
<div class="space-y-6">
    <div class="flex justify-between items-center">
        <div>
            <h1 class="text-3xl font-bold text-gray-900">Lectures</h1>
            <p class="mt-2 text-sm text-gray-600">Manage lecture schedule</p>
        </div>
        <a href="{{ route('lectures.create') }}" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Add Lecture</a>
    </div>

    <div class="bg-white shadow rounded-lg overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
                <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Class</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Subject</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Professor</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Day</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
                    <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                @forelse($lectures as $lecture)
                    <tr>
                        <td class="px-6 py-4 text-sm font-medium text-gray-900">{{ $lecture->class->name }}</td>
                        <td class="px-6 py-4 text-sm text-gray-500">{{ $lecture->subject->name }}</td>
                        <td class="px-6 py-4 text-sm text-gray-500">{{ $lecture->professor->name }}</td>
                        <td class="px-6 py-4 text-sm text-gray-500 capitalize">{{ $lecture->day_of_week }}</td>
                        <td class="px-6 py-4 text-sm text-gray-500">{{ date('H:i', strtotime($lecture->start_time)) }} - {{ date('H:i', strtotime($lecture->end_time)) }}</td>
                        <td class="px-6 py-4 text-right text-sm font-medium">
                            <a href="{{ route('lectures.show', $lecture) }}" class="text-blue-600 hover:text-blue-900 mr-3">View</a>
                            <a href="{{ route('lectures.edit', $lecture) }}" class="text-indigo-600 hover:text-indigo-900 mr-3">Edit</a>
                            <form action="{{ route('lectures.destroy', $lecture) }}" method="POST" class="inline">
                                @csrf @method('DELETE')
                                <button type="submit" class="text-red-600 hover:text-red-900" onclick="return confirm('Are you sure?')">Delete</button>
                            </form>
                        </td>
                    </tr>
                @empty
                    <tr><td colspan="6" class="px-6 py-4 text-center text-sm text-gray-500">No lectures found.</td></tr>
                @endforelse
            </tbody>
        </table>
    </div>
    {{ $lectures->links() }}
</div>
@endsection

