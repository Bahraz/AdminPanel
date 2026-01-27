<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
public function boot(): void
{
    // Ta linia sprawia, że Laravel nie będzie "uciekał" przed polskimi znakami w JSON
    $this->app->bind(\Illuminate\Http\JsonResponse::class, function ($app, $parameters) {
        return new \Illuminate\Http\JsonResponse(
            $parameters['data'] ?? null,
            $parameters['status'] ?? 200,
            $parameters['headers'] ?? [],
            JSON_UNESCAPED_UNICODE // To jest kluczowa flaga
        );
    });
}
}
