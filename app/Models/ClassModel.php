<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ClassModel extends Model
{
    use HasFactory;

    protected $table = 'classes';

    protected $fillable = [
        'name',
        'code',
        'academic_year',
        'semester',
        'capacity',
        'department_id',
    ];

    protected $casts = [
        'academic_year' => 'integer',
        'capacity' => 'integer',
    ];

    /**
     * Get the department that owns the class.
     */
    public function department(): BelongsTo
    {
        return $this->belongsTo(Department::class);
    }

    /**
     * Get the subjects for the class.
     */
    public function subjects(): BelongsToMany
    {
        return $this->belongsToMany(Subject::class, 'class_subject')
            ->withTimestamps();
    }

    /**
     * Get the lectures for the class.
     */
    public function lectures(): HasMany
    {
        return $this->hasMany(Lecture::class);
    }

    /**
     * Get the students for the class.
     */
    public function students(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'student_class')
            ->where('role', 'student')
            ->withPivot('status', 'grade')
            ->withTimestamps();
    }
}

