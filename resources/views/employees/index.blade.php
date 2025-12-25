@extends('layouts.dashboard')

@section('title', 'Employees')

@section('content')
<div class="space-y-6">
    <div class="flex justify-between items-center">
        <div>
            <h1 class="text-3xl font-bold text-gray-900">Employees</h1>
            <p class="mt-2 text-sm text-gray-600">Manage employees</p>
        </div>
        <a href="{{ route('employees.create') }}" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Add Employee</a>
    </div>

    <div class="bg-white shadow rounded-lg overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
                <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Faculties</th>
                    <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                @forelse($employees as $employee)
                    <tr>
                        <td class="px-6 py-4 text-sm font-medium text-gray-900">{{ $employee->name }}</td>
                        <td class="px-6 py-4 text-sm text-gray-500">{{ $employee->email }}</td>
                        <td class="px-6 py-4 text-sm text-gray-500">
                            @if($employee->employeeFaculties->isNotEmpty())
                                {{ $employee->employeeFaculties->pluck('name')->join(', ') }}
                            @else
                                <span class="text-yellow-600">University Level</span>
                            @endif
                        </td>
                        <td class="px-6 py-4 text-right text-sm font-medium">
                            <a href="{{ route('employees.show', $employee) }}" class="text-blue-600 hover:text-blue-900 mr-3">View</a>
                            <a href="{{ route('employees.edit', $employee) }}" class="text-indigo-600 hover:text-indigo-900 mr-3">Edit</a>
                            <form action="{{ route('employees.destroy', $employee) }}" method="POST" class="inline">
                                @csrf @method('DELETE')
                                <button type="submit" class="text-red-600 hover:text-red-900" onclick="return confirm('Are you sure?')">Delete</button>
                            </form>
                        </td>
                    </tr>
                @empty
                    <tr><td colspan="4" class="px-6 py-4 text-center text-sm text-gray-500">No employees found.</td></tr>
                @endforelse
            </tbody>
        </table>
    </div>
    {{ $employees->links() }}
</div>
@endsection

