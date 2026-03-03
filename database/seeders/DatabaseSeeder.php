<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::firstOrCreate(
            ['email' => 'admin@unione.com'],
            [
                'name' => 'Unione Admin',
                'password' => 'password',
                'email_verified_at' => now(),
                'role' => 'admin',
            ]
        );

        // create a professor user
        User::firstOrCreate(
            ['email' => 'prof@unione.com'],
            [
                'name' => 'Professor User',
                'password' => 'password',
                'email_verified_at' => now(),
                'role' => 'professor',
            ]
        );

        // create a student user
        User::firstOrCreate(
            ['email' => 'student@unione.com'],
            [
                'name' => 'Student User',
                'password' => 'password',
                'email_verified_at' => now(),
                'role' => 'student',
            ]
        );

        // create an employee user
        User::firstOrCreate(
            ['email' => 'employee@unione.com'],
            [
                'name' => 'Employee User',
                'password' => 'password',
                'email_verified_at' => now(),
                'role' => 'employee',
            ]
        );
    }
}
