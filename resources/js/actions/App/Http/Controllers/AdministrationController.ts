import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AdministrationController::index
 * @see app/Http/Controllers/AdministrationController.php:12
 * @route '/administration'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/administration',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AdministrationController::index
 * @see app/Http/Controllers/AdministrationController.php:12
 * @route '/administration'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AdministrationController::index
 * @see app/Http/Controllers/AdministrationController.php:12
 * @route '/administration'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AdministrationController::index
 * @see app/Http/Controllers/AdministrationController.php:12
 * @route '/administration'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AdministrationController::index
 * @see app/Http/Controllers/AdministrationController.php:12
 * @route '/administration'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AdministrationController::index
 * @see app/Http/Controllers/AdministrationController.php:12
 * @route '/administration'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AdministrationController::index
 * @see app/Http/Controllers/AdministrationController.php:12
 * @route '/administration'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\AdministrationController::create
 * @see app/Http/Controllers/AdministrationController.php:20
 * @route '/administration/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/administration/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AdministrationController::create
 * @see app/Http/Controllers/AdministrationController.php:20
 * @route '/administration/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AdministrationController::create
 * @see app/Http/Controllers/AdministrationController.php:20
 * @route '/administration/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AdministrationController::create
 * @see app/Http/Controllers/AdministrationController.php:20
 * @route '/administration/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AdministrationController::create
 * @see app/Http/Controllers/AdministrationController.php:20
 * @route '/administration/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AdministrationController::create
 * @see app/Http/Controllers/AdministrationController.php:20
 * @route '/administration/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AdministrationController::create
 * @see app/Http/Controllers/AdministrationController.php:20
 * @route '/administration/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\AdministrationController::store
 * @see app/Http/Controllers/AdministrationController.php:26
 * @route '/administration'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/administration',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AdministrationController::store
 * @see app/Http/Controllers/AdministrationController.php:26
 * @route '/administration'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AdministrationController::store
 * @see app/Http/Controllers/AdministrationController.php:26
 * @route '/administration'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AdministrationController::store
 * @see app/Http/Controllers/AdministrationController.php:26
 * @route '/administration'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AdministrationController::store
 * @see app/Http/Controllers/AdministrationController.php:26
 * @route '/administration'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\AdministrationController::show
 * @see app/Http/Controllers/AdministrationController.php:48
 * @route '/administration/{administration}'
 */
export const show = (args: { administration: number | { id: number } } | [administration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/administration/{administration}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AdministrationController::show
 * @see app/Http/Controllers/AdministrationController.php:48
 * @route '/administration/{administration}'
 */
show.url = (args: { administration: number | { id: number } } | [administration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { administration: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { administration: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    administration: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        administration: typeof args.administration === 'object'
                ? args.administration.id
                : args.administration,
                }

    return show.definition.url
            .replace('{administration}', parsedArgs.administration.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AdministrationController::show
 * @see app/Http/Controllers/AdministrationController.php:48
 * @route '/administration/{administration}'
 */
show.get = (args: { administration: number | { id: number } } | [administration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AdministrationController::show
 * @see app/Http/Controllers/AdministrationController.php:48
 * @route '/administration/{administration}'
 */
show.head = (args: { administration: number | { id: number } } | [administration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AdministrationController::show
 * @see app/Http/Controllers/AdministrationController.php:48
 * @route '/administration/{administration}'
 */
    const showForm = (args: { administration: number | { id: number } } | [administration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AdministrationController::show
 * @see app/Http/Controllers/AdministrationController.php:48
 * @route '/administration/{administration}'
 */
        showForm.get = (args: { administration: number | { id: number } } | [administration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AdministrationController::show
 * @see app/Http/Controllers/AdministrationController.php:48
 * @route '/administration/{administration}'
 */
        showForm.head = (args: { administration: number | { id: number } } | [administration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\AdministrationController::edit
 * @see app/Http/Controllers/AdministrationController.php:54
 * @route '/administration/{administration}/edit'
 */
export const edit = (args: { administration: number | { id: number } } | [administration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/administration/{administration}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AdministrationController::edit
 * @see app/Http/Controllers/AdministrationController.php:54
 * @route '/administration/{administration}/edit'
 */
edit.url = (args: { administration: number | { id: number } } | [administration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { administration: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { administration: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    administration: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        administration: typeof args.administration === 'object'
                ? args.administration.id
                : args.administration,
                }

    return edit.definition.url
            .replace('{administration}', parsedArgs.administration.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AdministrationController::edit
 * @see app/Http/Controllers/AdministrationController.php:54
 * @route '/administration/{administration}/edit'
 */
edit.get = (args: { administration: number | { id: number } } | [administration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AdministrationController::edit
 * @see app/Http/Controllers/AdministrationController.php:54
 * @route '/administration/{administration}/edit'
 */
edit.head = (args: { administration: number | { id: number } } | [administration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AdministrationController::edit
 * @see app/Http/Controllers/AdministrationController.php:54
 * @route '/administration/{administration}/edit'
 */
    const editForm = (args: { administration: number | { id: number } } | [administration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AdministrationController::edit
 * @see app/Http/Controllers/AdministrationController.php:54
 * @route '/administration/{administration}/edit'
 */
        editForm.get = (args: { administration: number | { id: number } } | [administration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AdministrationController::edit
 * @see app/Http/Controllers/AdministrationController.php:54
 * @route '/administration/{administration}/edit'
 */
        editForm.head = (args: { administration: number | { id: number } } | [administration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\AdministrationController::update
 * @see app/Http/Controllers/AdministrationController.php:61
 * @route '/administration/{administration}'
 */
export const update = (args: { administration: number | { id: number } } | [administration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/administration/{administration}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\AdministrationController::update
 * @see app/Http/Controllers/AdministrationController.php:61
 * @route '/administration/{administration}'
 */
update.url = (args: { administration: number | { id: number } } | [administration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { administration: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { administration: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    administration: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        administration: typeof args.administration === 'object'
                ? args.administration.id
                : args.administration,
                }

    return update.definition.url
            .replace('{administration}', parsedArgs.administration.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AdministrationController::update
 * @see app/Http/Controllers/AdministrationController.php:61
 * @route '/administration/{administration}'
 */
update.put = (args: { administration: number | { id: number } } | [administration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\AdministrationController::update
 * @see app/Http/Controllers/AdministrationController.php:61
 * @route '/administration/{administration}'
 */
update.patch = (args: { administration: number | { id: number } } | [administration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\AdministrationController::update
 * @see app/Http/Controllers/AdministrationController.php:61
 * @route '/administration/{administration}'
 */
    const updateForm = (args: { administration: number | { id: number } } | [administration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AdministrationController::update
 * @see app/Http/Controllers/AdministrationController.php:61
 * @route '/administration/{administration}'
 */
        updateForm.put = (args: { administration: number | { id: number } } | [administration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\AdministrationController::update
 * @see app/Http/Controllers/AdministrationController.php:61
 * @route '/administration/{administration}'
 */
        updateForm.patch = (args: { administration: number | { id: number } } | [administration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\AdministrationController::destroy
 * @see app/Http/Controllers/AdministrationController.php:87
 * @route '/administration/{administration}'
 */
export const destroy = (args: { administration: number | { id: number } } | [administration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/administration/{administration}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AdministrationController::destroy
 * @see app/Http/Controllers/AdministrationController.php:87
 * @route '/administration/{administration}'
 */
destroy.url = (args: { administration: number | { id: number } } | [administration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { administration: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { administration: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    administration: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        administration: typeof args.administration === 'object'
                ? args.administration.id
                : args.administration,
                }

    return destroy.definition.url
            .replace('{administration}', parsedArgs.administration.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AdministrationController::destroy
 * @see app/Http/Controllers/AdministrationController.php:87
 * @route '/administration/{administration}'
 */
destroy.delete = (args: { administration: number | { id: number } } | [administration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\AdministrationController::destroy
 * @see app/Http/Controllers/AdministrationController.php:87
 * @route '/administration/{administration}'
 */
    const destroyForm = (args: { administration: number | { id: number } } | [administration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AdministrationController::destroy
 * @see app/Http/Controllers/AdministrationController.php:87
 * @route '/administration/{administration}'
 */
        destroyForm.delete = (args: { administration: number | { id: number } } | [administration: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const AdministrationController = { index, create, store, show, edit, update, destroy }

export default AdministrationController