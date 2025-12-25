<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('employee_faculty', function (Blueprint $table) {
            $table->id();
            $table->foreignId('employee_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('faculty_id')->nullable()->constrained('faculties')->onDelete('cascade');
            $table->boolean('is_university_level')->default(false)->comment('True if employee is at university level, not faculty level');
            $table->string('position')->nullable();
            $table->timestamps();

            $table->unique(['employee_id', 'faculty_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employee_faculty');
    }
};

