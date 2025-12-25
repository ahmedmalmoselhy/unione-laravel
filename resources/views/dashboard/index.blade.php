@extends('layouts.dashboard')

@section('title', 'Dashboard')

@section('content')
<div class="space-y-6">
    <div>
        <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p class="mt-2 text-sm text-gray-600">Welcome to the University Management System</p>
    </div>

    <!-- Statistics Section -->
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <!-- TODO: Add statistics cards here -->
        <!-- Example structure:
        <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="p-5">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <svg class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </div>
                    <div class="ml-5 w-0 flex-1">
                        <dl>
                            <dt class="text-sm font-medium text-gray-500 truncate">Total Students</dt>
                            <dd class="text-lg font-medium text-gray-900">0</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
        -->
        
        <!-- Placeholder for future statistics -->
        <div class="bg-white overflow-hidden shadow rounded-lg border-2 border-dashed border-gray-300">
            <div class="p-5 text-center">
                <p class="text-sm text-gray-500">Statistics will be displayed here</p>
            </div>
        </div>
        
        <div class="bg-white overflow-hidden shadow rounded-lg border-2 border-dashed border-gray-300">
            <div class="p-5 text-center">
                <p class="text-sm text-gray-500">Statistics will be displayed here</p>
            </div>
        </div>
        
        <div class="bg-white overflow-hidden shadow rounded-lg border-2 border-dashed border-gray-300">
            <div class="p-5 text-center">
                <p class="text-sm text-gray-500">Statistics will be displayed here</p>
            </div>
        </div>
        
        <div class="bg-white overflow-hidden shadow rounded-lg border-2 border-dashed border-gray-300">
            <div class="p-5 text-center">
                <p class="text-sm text-gray-500">Statistics will be displayed here</p>
            </div>
        </div>
    </div>

    <!-- Quick Actions Section -->
    <div class="bg-white shadow rounded-lg">
        <div class="px-6 py-4 border-b border-gray-200">
            <h2 class="text-lg font-medium text-gray-900">Quick Actions</h2>
        </div>
        <div class="p-6">
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <a href="{{ route('faculties.create') }}" class="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <svg class="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                    </svg>
                    <span class="text-sm font-medium text-gray-900">Add Faculty</span>
                </a>
                
                <a href="{{ route('departments.create') }}" class="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <svg class="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                    </svg>
                    <span class="text-sm font-medium text-gray-900">Add Department</span>
                </a>
                
                <a href="{{ route('students.create') }}" class="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <svg class="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                    </svg>
                    <span class="text-sm font-medium text-gray-900">Add Student</span>
                </a>
                
                <a href="{{ route('lectures.create') }}" class="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <svg class="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                    </svg>
                    <span class="text-sm font-medium text-gray-900">Add Lecture</span>
                </a>
            </div>
        </div>
    </div>
</div>
@endsection

