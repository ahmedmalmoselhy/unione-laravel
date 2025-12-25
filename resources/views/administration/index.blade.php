@extends('layouts.dashboard')

@section('title', 'Administration')

@section('content')
<div class="space-y-6">
    <div class="flex justify-between items-center">
        <div>
            <h1 class="text-3xl font-bold text-gray-900">Administration</h1>
            <p class="mt-2 text-sm text-gray-600">Manage administration users</p>
        </div>
        <a href="{{ route('administration.create') }}" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Add Administration</a>
    </div>

    <div class="bg-white shadow rounded-lg overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
                <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Departments</th>
                    <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                @forelse($administration as $admin)
                    <tr>
                        <td class="px-6 py-4 text-sm font-medium text-gray-900">{{ $admin->name }}</td>
                        <td class="px-6 py-4 text-sm text-gray-500">{{ $admin->email }}</td>
                        <td class="px-6 py-4 text-sm text-gray-500">
                            @if($admin->professorDepartments->isNotEmpty())
                                {{ $admin->professorDepartments->pluck('name')->join(', ') }}
                            @else
                                N/A
                            @endif
                        </td>
                        <td class="px-6 py-4 text-right text-sm font-medium">
                            <a href="{{ route('administration.show', $admin) }}" class="text-blue-600 hover:text-blue-900 mr-3">View</a>
                            <a href="{{ route('administration.edit', $admin) }}" class="text-indigo-600 hover:text-indigo-900 mr-3">Edit</a>
                            <form action="{{ route('administration.destroy', $admin) }}" method="POST" class="inline">
                                @csrf @method('DELETE')
                                <button type="submit" class="text-red-600 hover:text-red-900" onclick="return confirm('Are you sure?')">Delete</button>
                            </form>
                        </td>
                    </tr>
                @empty
                    <tr><td colspan="4" class="px-6 py-4 text-center text-sm text-gray-500">No administration users found.</td></tr>
                @endforelse
            </tbody>
        </table>
    </div>
    {{ $administration->links() }}
</div>
@endsection

