import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\PasswordResetController::sendResetLink
 * @see app/Http/Controllers/Api/PasswordResetController.php:17
 * @route '/api/v1/password/forgot'
 */
export const sendResetLink = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sendResetLink.url(options),
    method: 'post',
})

sendResetLink.definition = {
    methods: ["post"],
    url: '/api/v1/password/forgot',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\PasswordResetController::sendResetLink
 * @see app/Http/Controllers/Api/PasswordResetController.php:17
 * @route '/api/v1/password/forgot'
 */
sendResetLink.url = (options?: RouteQueryOptions) => {
    return sendResetLink.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PasswordResetController::sendResetLink
 * @see app/Http/Controllers/Api/PasswordResetController.php:17
 * @route '/api/v1/password/forgot'
 */
sendResetLink.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sendResetLink.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\PasswordResetController::sendResetLink
 * @see app/Http/Controllers/Api/PasswordResetController.php:17
 * @route '/api/v1/password/forgot'
 */
    const sendResetLinkForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: sendResetLink.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\PasswordResetController::sendResetLink
 * @see app/Http/Controllers/Api/PasswordResetController.php:17
 * @route '/api/v1/password/forgot'
 */
        sendResetLinkForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: sendResetLink.url(options),
            method: 'post',
        })
    
    sendResetLink.form = sendResetLinkForm
/**
* @see \App\Http\Controllers\Api\PasswordResetController::reset
 * @see app/Http/Controllers/Api/PasswordResetController.php:37
 * @route '/api/v1/password/reset'
 */
export const reset = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reset.url(options),
    method: 'post',
})

reset.definition = {
    methods: ["post"],
    url: '/api/v1/password/reset',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\PasswordResetController::reset
 * @see app/Http/Controllers/Api/PasswordResetController.php:37
 * @route '/api/v1/password/reset'
 */
reset.url = (options?: RouteQueryOptions) => {
    return reset.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PasswordResetController::reset
 * @see app/Http/Controllers/Api/PasswordResetController.php:37
 * @route '/api/v1/password/reset'
 */
reset.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reset.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\PasswordResetController::reset
 * @see app/Http/Controllers/Api/PasswordResetController.php:37
 * @route '/api/v1/password/reset'
 */
    const resetForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: reset.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\PasswordResetController::reset
 * @see app/Http/Controllers/Api/PasswordResetController.php:37
 * @route '/api/v1/password/reset'
 */
        resetForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: reset.url(options),
            method: 'post',
        })
    
    reset.form = resetForm
const PasswordResetController = { sendResetLink, reset }

export default PasswordResetController