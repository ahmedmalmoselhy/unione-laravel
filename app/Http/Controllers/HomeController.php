<?php

namespace App\Http\Controllers;

use App\Models\Lecture;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        if ($user->role === 'admin') {
            return redirect()->route('dashboard');
        }

        $lectures = collect();

        if ($user->role === 'student') {
            // Get lectures for the student's classes
            // Assuming studentClasses relationship returns the Class models,
            // and we need lectures for those classes.
            $classIds = $user->studentClasses()->pluck('classes.id');
            $lectures = Lecture::with(['subject', 'professor', 'class'])
                ->whereIn('class_id', $classIds)
                ->orderBy('day_of_week')
                ->orderBy('start_time')
                ->get();
        } elseif ($user->role === 'professor') {
            $lectures = Lecture::with(['subject', 'class'])
                ->where('professor_id', $user->id)
                ->orderBy('day_of_week')
                ->orderBy('start_time')
                ->get();
        }

        return Inertia::render('Home', [
            'lectures' => $lectures,
        ]);
    }
}
