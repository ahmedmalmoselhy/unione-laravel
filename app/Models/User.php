<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;
// use Laravel\Sanctum\HasApiTokens; // Uncomment after installing: composer require laravel/sanctum

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, TwoFactorAuthenticatable;
    // use HasApiTokens; // Uncomment after installing: composer require laravel/sanctum

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'two_factor_secret',
        'two_factor_recovery_codes',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'two_factor_confirmed_at' => 'datetime',
        ];
    }

    /**
     * Get the departments for professors/administration.
     */
    public function professorDepartments()
    {
        return $this->belongsToMany(Department::class, 'professor_department')
            ->withTimestamps();
    }

    /**
     * Get the department for students.
     */
    public function studentDepartment()
    {
        return $this->belongsToMany(Department::class, 'student_department')
            ->withPivot('is_general', 'academic_year')
            ->withTimestamps();
    }

    /**
     * Get the faculty for employees.
     */
    public function employeeFaculties()
    {
        return $this->belongsToMany(Faculty::class, 'employee_faculty')
            ->withPivot('position', 'is_university_level')
            ->withTimestamps();
    }

    /**
     * Get the classes for students.
     */
    public function studentClasses()
    {
        return $this->belongsToMany(ClassModel::class, 'student_class')
            ->withPivot('status', 'grade')
            ->withTimestamps();
    }

    /**
     * Get the lectures for professors.
     */
    public function lectures()
    {
        return $this->hasMany(Lecture::class, 'professor_id');
    }
}
