<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Faculty extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'code',
        'description',
    ];

    /**
     * Get the departments for the faculty.
     */
    public function departments(): HasMany
    {
        return $this->hasMany(Department::class);
    }

    /**
     * Get the employees for the faculty.
     */
    public function employees()
    {
        return $this->belongsToMany(User::class, 'employee_faculty')
            ->where('role', 'employee')
            ->withPivot('position', 'is_university_level')
            ->withTimestamps();
    }
}

