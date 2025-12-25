@extends('layouts.dashboard')

@section('title', 'View Lecture')

@section('content')
<div class="max-w-2xl">
    <div class="mb-6 flex justify-between items-center">
        <h1 class="text-3xl font-bold text-gray-900">Lecture Details</h1>
        <div class="space-x-3">
            <a href="{{ route('lectures.edit', $lecture) }}" class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Edit</a>
            <a href="{{ route('lectures.index') }}" class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">Back</a>
        </div>
    </div>
    <div class="bg-white shadow rounded-lg p-6 space-y-6">
        <div><label class="block text-sm font-medium text-gray-700">Class</label><p class="mt-1 text-sm text-gray-900">{{ $lecture->class->name }}</p></div>
        <div><label class="block text-sm font-medium text-gray-700">Subject</label><p class="mt-1 text-sm text-gray-900">{{ $lecture->subject->name }}</p></div>
        <div><label class="block text-sm font-medium text-gray-700">Professor</label><p class="mt-1 text-sm text-gray-900">{{ $lecture->professor->name }}</p></div>
        <div><label class="block text-sm font-medium text-gray-700">Room</label><p class="mt-1 text-sm text-gray-900">{{ $lecture->room ?? 'N/A' }}</p></div>
        <div><label class="block text-sm font-medium text-gray-700">Day</label><p class="mt-1 text-sm text-gray-900 capitalize">{{ $lecture->day_of_week }}</p></div>
        <div><label class="block text-sm font-medium text-gray-700">Time</label><p class="mt-1 text-sm text-gray-900">{{ date('H:i', strtotime($lecture->start_time)) }} - {{ date('H:i', strtotime($lecture->end_time)) }}</p></div>
        @if($lecture->start_date)
        <div><label class="block text-sm font-medium text-gray-700">Date Range</label><p class="mt-1 text-sm text-gray-900">{{ $lecture->start_date->format('M d, Y') }} - {{ $lecture->end_date?->format('M d, Y') ?? 'Ongoing' }}</p></div>
        @endif
    </div>
</div>
@endsection

