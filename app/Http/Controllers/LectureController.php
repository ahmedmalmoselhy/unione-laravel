<?php

namespace App\Http\Controllers;

use App\Models\ClassModel;
use App\Models\Lecture;
use App\Models\Subject;
use App\Models\User;
use Illuminate\Http\Request;

class LectureController extends Controller
{
    public function index()
    {
        $lectures = Lecture::with(['class', 'subject', 'professor'])->latest()->paginate(15);
        return view('lectures.index', compact('lectures'));
    }

    public function create()
    {
        $classes = ClassModel::all();
        $subjects = Subject::all();
        $professors = User::whereIn('role', ['professor', 'administration'])->get();
        return view('lectures.create', compact('classes', 'subjects', 'professors'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'class_id' => 'required|exists:classes,id',
            'subject_id' => 'required|exists:subjects,id',
            'professor_id' => 'required|exists:users,id',
            'room' => 'nullable|string|max:255',
            'day_of_week' => 'required|in:monday,tuesday,wednesday,thursday,friday,saturday,sunday',
            'start_time' => 'required|date_format:H:i',
            'end_time' => 'required|date_format:H:i|after:start_time',
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date|after_or_equal:start_date',
        ]);

        Lecture::create($validated);

        return redirect()->route('lectures.index')
            ->with('success', 'Lecture created successfully.');
    }

    public function show(Lecture $lecture)
    {
        $lecture->load(['class', 'subject', 'professor']);
        return view('lectures.show', compact('lecture'));
    }

    public function edit(Lecture $lecture)
    {
        $classes = ClassModel::all();
        $subjects = Subject::all();
        $professors = User::whereIn('role', ['professor', 'administration'])->get();
        return view('lectures.edit', compact('lecture', 'classes', 'subjects', 'professors'));
    }

    public function update(Request $request, Lecture $lecture)
    {
        $validated = $request->validate([
            'class_id' => 'required|exists:classes,id',
            'subject_id' => 'required|exists:subjects,id',
            'professor_id' => 'required|exists:users,id',
            'room' => 'nullable|string|max:255',
            'day_of_week' => 'required|in:monday,tuesday,wednesday,thursday,friday,saturday,sunday',
            'start_time' => 'required|date_format:H:i',
            'end_time' => 'required|date_format:H:i|after:start_time',
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date|after_or_equal:start_date',
        ]);

        $lecture->update($validated);

        return redirect()->route('lectures.index')
            ->with('success', 'Lecture updated successfully.');
    }

    public function destroy(Lecture $lecture)
    {
        $lecture->delete();

        return redirect()->route('lectures.index')
            ->with('success', 'Lecture deleted successfully.');
    }
}

