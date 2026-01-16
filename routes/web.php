<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/contact', function () {
    return Inertia::render('contact');
})->name('contact');

Route::get('/projects', function () {
    return Inertia::render('projects');
})->name('projects');

Route::get('/about', function () {
    return Inertia::render('about');
})->name('about');
