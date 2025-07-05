<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            "first_name"=> "Admin",
            "last_name"=> "User",
            "email"=> "admin@example.com",
            "email_verfied_at" => now(),
            "phone" => "0123456789",
            "password" => bcrypt("admin123"),
            "is_admin" => true,
        ]);
    }
}
