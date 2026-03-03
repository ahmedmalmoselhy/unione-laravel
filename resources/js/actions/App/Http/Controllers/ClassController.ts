import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ClassController::index
 * @see app/Http/Controllers/ClassController.php:11
 * @route '/classes'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/classes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ClassController::index
 * @see app/Http/Controllers/ClassController.php:11
 * @route '/classes'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ClassController::index
 * @see app/Http/Controllers/ClassController.php:11
 * @route '/classes'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ClassController::index
 * @see app/Http/Controllers/ClassController.php:11
 * @route '/classes'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ClassController::index
 * @see app/Http/Controllers/ClassController.php:11
 * @route '/classes'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ClassController::index
 * @see app/Http/Controllers/ClassController.php:11
 * @route '/classes'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ClassController::index
 * @see app/Http/Controllers/ClassController.php:11
 * @route '/classes'
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
* @see \App\Http\Controllers\ClassController::create
 * @see app/Http/Controllers/ClassController.php:17
 * @route '/classes/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/classes/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ClassController::create
 * @see app/Http/Controllers/ClassController.php:17
 * @route '/classes/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ClassController::create
 * @see app/Http/Controllers/ClassController.php:17
 * @route '/classes/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ClassController::create
 * @see app/Http/Controllers/ClassController.php:17
 * @route '/classes/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ClassController::create
 * @see app/Http/Controllers/ClassController.php:17
 * @route '/classes/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ClassController::create
 * @see app/Http/Controllers/ClassController.php:17
 * @route '/classes/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ClassController::create
 * @see app/Http/Controllers/ClassController.php:17
 * @route '/classes/create'
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
* @see \App\Http\Controllers\ClassController::store
 * @see app/Http/Controllers/ClassController.php:23
 * @route '/classes'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/classes',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ClassController::store
 * @see app/Http/Controllers/ClassController.php:23
 * @route '/classes'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ClassController::store
 * @see app/Http/Controllers/ClassController.php:23
 * @route '/classes'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ClassController::store
 * @see app/Http/Controllers/ClassController.php:23
 * @route '/classes'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ClassController::store
 * @see app/Http/Controllers/ClassController.php:23
 * @route '/classes'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\ClassController::show
 * @see app/Http/Controllers/ClassController.php:40
 * @route '/classes/{class}'
 */
export const show = (args: { class: number | { id: number } } | [classParam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/classes/{class}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ClassController::show
 * @see app/Http/Controllers/ClassController.php:40
 * @route '/classes/{class}'
 */
show.url = (args: { class: number | { id: number } } | [classParam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { class: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { class: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    class: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        class: typeof args.class === 'object'
                ? args.class.id
                : args.class,
                }

    return show.definition.url
            .replace('{class}', parsedArgs.class.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ClassController::show
 * @see app/Http/Controllers/ClassController.php:40
 * @route '/classes/{class}'
 */
show.get = (args: { class: number | { id: number } } | [classParam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ClassController::show
 * @see app/Http/Controllers/ClassController.php:40
 * @route '/classes/{class}'
 */
show.head = (args: { class: number | { id: number } } | [classParam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ClassController::show
 * @see app/Http/Controllers/ClassController.php:40
 * @route '/classes/{class}'
 */
    const showForm = (args: { class: number | { id: number } } | [classParam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ClassController::show
 * @see app/Http/Controllers/ClassController.php:40
 * @route '/classes/{class}'
 */
        showForm.get = (args: { class: number | { id: number } } | [classParam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ClassController::show
 * @see app/Http/Controllers/ClassController.php:40
 * @route '/classes/{class}'
 */
        showForm.head = (args: { class: number | { id: number } } | [classParam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ClassController::edit
 * @see app/Http/Controllers/ClassController.php:46
 * @route '/classes/{class}/edit'
 */
export const edit = (args: { class: number | { id: number } } | [classParam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/classes/{class}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ClassController::edit
 * @see app/Http/Controllers/ClassController.php:46
 * @route '/classes/{class}/edit'
 */
edit.url = (args: { class: number | { id: number } } | [classParam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { class: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { class: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    class: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        class: typeof args.class === 'object'
                ? args.class.id
                : args.class,
                }

    return edit.definition.url
            .replace('{class}', parsedArgs.class.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ClassController::edit
 * @see app/Http/Controllers/ClassController.php:46
 * @route '/classes/{class}/edit'
 */
edit.get = (args: { class: number | { id: number } } | [classParam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ClassController::edit
 * @see app/Http/Controllers/ClassController.php:46
 * @route '/classes/{class}/edit'
 */
edit.head = (args: { class: number | { id: number } } | [classParam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ClassController::edit
 * @see app/Http/Controllers/ClassController.php:46
 * @route '/classes/{class}/edit'
 */
    const editForm = (args: { class: number | { id: number } } | [classParam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ClassController::edit
 * @see app/Http/Controllers/ClassController.php:46
 * @route '/classes/{class}/edit'
 */
        editForm.get = (args: { class: number | { id: number } } | [classParam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ClassController::edit
 * @see app/Http/Controllers/ClassController.php:46
 * @route '/classes/{class}/edit'
 */
        editForm.head = (args: { class: number | { id: number } } | [classParam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ClassController::update
 * @see app/Http/Controllers/ClassController.php:52
 * @route '/classes/{class}'
 */
export const update = (args: { class: number | { id: number } } | [classParam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/classes/{class}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\ClassController::update
 * @see app/Http/Controllers/ClassController.php:52
 * @route '/classes/{class}'
 */
update.url = (args: { class: number | { id: number } } | [classParam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { class: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { class: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    class: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        class: typeof args.class === 'object'
                ? args.class.id
                : args.class,
                }

    return update.definition.url
            .replace('{class}', parsedArgs.class.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ClassController::update
 * @see app/Http/Controllers/ClassController.php:52
 * @route '/classes/{class}'
 */
update.put = (args: { class: number | { id: number } } | [classParam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\ClassController::update
 * @see app/Http/Controllers/ClassController.php:52
 * @route '/classes/{class}'
 */
update.patch = (args: { class: number | { id: number } } | [classParam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\ClassController::update
 * @see app/Http/Controllers/ClassController.php:52
 * @route '/classes/{class}'
 */
    const updateForm = (args: { class: number | { id: number } } | [classParam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ClassController::update
 * @see app/Http/Controllers/ClassController.php:52
 * @route '/classes/{class}'
 */
        updateForm.put = (args: { class: number | { id: number } } | [classParam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\ClassController::update
 * @see app/Http/Controllers/ClassController.php:52
 * @route '/classes/{class}'
 */
        updateForm.patch = (args: { class: number | { id: number } } | [classParam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\ClassController::destroy
 * @see app/Http/Controllers/ClassController.php:69
 * @route '/classes/{class}'
 */
export const destroy = (args: { class: number | { id: number } } | [classParam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/classes/{class}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ClassController::destroy
 * @see app/Http/Controllers/ClassController.php:69
 * @route '/classes/{class}'
 */
destroy.url = (args: { class: number | { id: number } } | [classParam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { class: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { class: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    class: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        class: typeof args.class === 'object'
                ? args.class.id
                : args.class,
                }

    return destroy.definition.url
            .replace('{class}', parsedArgs.class.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ClassController::destroy
 * @see app/Http/Controllers/ClassController.php:69
 * @route '/classes/{class}'
 */
destroy.delete = (args: { class: number | { id: number } } | [classParam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\ClassController::destroy
 * @see app/Http/Controllers/ClassController.php:69
 * @route '/classes/{class}'
 */
    const destroyForm = (args: { class: number | { id: number } } | [classParam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ClassController::destroy
 * @see app/Http/Controllers/ClassController.php:69
 * @route '/classes/{class}'
 */
        destroyForm.delete = (args: { class: number | { id: number } } | [classParam: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const ClassController = { index, create, store, show, edit, update, destroy }

export default ClassController