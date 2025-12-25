@extends('layouts.dashboard')

@section('title', 'Professors')

@section('content')
<div class="space-y-6">
    <div class="flex justify-between items-center">
        <div>
            <h1 class="text-3xl font-bold text-gray-900">Professors</h1>
            <p class="mt-2 text-sm text-gray-600">Manage professors</p>
        </div>
        <a href="{{ route('professors.create') }}" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Add Professor</a>
    </div>

    <div class="bg-white shadow rounded-lg overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
                <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                    <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                @forelse($professors as $professor)
                    <tr>
                        <td class="px-6 py-4 text-sm font-medium text-gray-900">{{ $professor->name }}</td>
                        <td class="px-6 py-4 text-sm text-gray-500">{{ $professor->email }}</td>
                        <td class="px-6 py-4 text-sm text-gray-500 capitalize">{{ $professor->role }}</td>
                        <td class="px-6 py-4 text-right text-sm font-medium">
                            <a href="{{ route('professors.show', $professor) }}" class="text-blue-600 hover:text-blue-900 mr-3">View</a>
                            <a href="{{ route('professors.edit', $professor) }}" class="text-indigo-600 hover:text-indigo-900 mr-3">Edit</a>
                            <form action="{{ route('professors.destroy', $professor) }}" method="POST" class="inline">
                                @csrf @method('DELETE')
                                <button type="submit" class="text-red-600 hover:text-red-900" onclick="return confirm('Are you sure?')">Delete</button>
                            </form>
                        </td>
                    </tr>
                @empty
                    <tr><td colspan="4" class="px-6 py-4 text-center text-sm text-gray-500">No professors found.</td></tr>
                @endforelse
            </tbody>
        </table>
    </div>
    {{ $professors->links() }}
</div>
@endsection

