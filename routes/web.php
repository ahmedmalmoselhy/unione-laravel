<?php

use App\Http\Controllers\AdministrationController;
use App\Http\Controllers\ClassController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\FacultyController;
use App\Http\Controllers\LectureController;
use App\Http\Controllers\ProfessorController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\SubjectController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');
    
    // Faculties
    Route::resource('faculties', FacultyController::class);
    
    // Departments
    Route::resource('departments', DepartmentController::class);
    
    // Subjects
    Route::resource('subjects', SubjectController::class);
    
    // Classes
    Route::resource('classes', ClassController::class);
    
    // Lectures
    Route::resource('lectures', LectureController::class);
    
    // Professors
    Route::resource('professors', ProfessorController::class);
    
    // Students
    Route::resource('students', StudentController::class);
    
    // Employees
    Route::resource('employees', EmployeeController::class);
    
    // Administration
    Route::resource('administration', AdministrationController::class);
});

require __DIR__.'/settings.php';
