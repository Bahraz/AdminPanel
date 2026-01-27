<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ForceJsonResponseEncoding
{
    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);

        // Jeśli odpowiedź jest JSON-em, dodaj flagę UNESCAPED_UNICODE
        if ($response instanceof JsonResponse) {
            $response->setEncodingOptions(JSON_UNESCAPED_UNICODE);
        }

        return $response;
    }
}