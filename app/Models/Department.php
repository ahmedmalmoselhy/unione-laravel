<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Department extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'code',
        'faculty_id',
        'description',
        'is_general',
    ];

    protected $casts = [
        'is_general' => 'boolean',
    ];

    /**
     * Get the faculty that owns the department.
     */
    public function faculty(): BelongsTo
    {
        return $this->belongsTo(Faculty::class);
    }

    /**
     * Get the subjects for the department.
     */
    public function subjects(): HasMany
    {
        return $this->hasMany(Subject::class);
    }

    /**
     * Get the classes for the department.
     */
    public function classes(): HasMany
    {
        return $this->hasMany(ClassModel::class);
    }

    /**
     * Get the professors for the department.
     */
    public function professors(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'professor_department')
            ->whereIn('role', ['professor', 'administration'])
            ->withTimestamps();
    }

    /**
     * Get the students for the department.
     */
    public function students(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'student_department')
            ->where('role', 'student')
            ->withPivot('is_general', 'academic_year')
            ->withTimestamps();
    }
}

