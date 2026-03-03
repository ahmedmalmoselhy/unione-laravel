import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\FacultyController::index
 * @see app/Http/Controllers/FacultyController.php:10
 * @route '/faculties'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/faculties',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FacultyController::index
 * @see app/Http/Controllers/FacultyController.php:10
 * @route '/faculties'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FacultyController::index
 * @see app/Http/Controllers/FacultyController.php:10
 * @route '/faculties'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\FacultyController::index
 * @see app/Http/Controllers/FacultyController.php:10
 * @route '/faculties'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\FacultyController::index
 * @see app/Http/Controllers/FacultyController.php:10
 * @route '/faculties'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\FacultyController::index
 * @see app/Http/Controllers/FacultyController.php:10
 * @route '/faculties'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\FacultyController::index
 * @see app/Http/Controllers/FacultyController.php:10
 * @route '/faculties'
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
* @see \App\Http\Controllers\FacultyController::create
 * @see app/Http/Controllers/FacultyController.php:16
 * @route '/faculties/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/faculties/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FacultyController::create
 * @see app/Http/Controllers/FacultyController.php:16
 * @route '/faculties/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FacultyController::create
 * @see app/Http/Controllers/FacultyController.php:16
 * @route '/faculties/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\FacultyController::create
 * @see app/Http/Controllers/FacultyController.php:16
 * @route '/faculties/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\FacultyController::create
 * @see app/Http/Controllers/FacultyController.php:16
 * @route '/faculties/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\FacultyController::create
 * @see app/Http/Controllers/FacultyController.php:16
 * @route '/faculties/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\FacultyController::create
 * @see app/Http/Controllers/FacultyController.php:16
 * @route '/faculties/create'
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
* @see \App\Http\Controllers\FacultyController::store
 * @see app/Http/Controllers/FacultyController.php:21
 * @route '/faculties'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/faculties',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\FacultyController::store
 * @see app/Http/Controllers/FacultyController.php:21
 * @route '/faculties'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FacultyController::store
 * @see app/Http/Controllers/FacultyController.php:21
 * @route '/faculties'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\FacultyController::store
 * @see app/Http/Controllers/FacultyController.php:21
 * @route '/faculties'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\FacultyController::store
 * @see app/Http/Controllers/FacultyController.php:21
 * @route '/faculties'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\FacultyController::show
 * @see app/Http/Controllers/FacultyController.php:35
 * @route '/faculties/{faculty}'
 */
export const show = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/faculties/{faculty}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FacultyController::show
 * @see app/Http/Controllers/FacultyController.php:35
 * @route '/faculties/{faculty}'
 */
show.url = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { faculty: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { faculty: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    faculty: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        faculty: typeof args.faculty === 'object'
                ? args.faculty.id
                : args.faculty,
                }

    return show.definition.url
            .replace('{faculty}', parsedArgs.faculty.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FacultyController::show
 * @see app/Http/Controllers/FacultyController.php:35
 * @route '/faculties/{faculty}'
 */
show.get = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\FacultyController::show
 * @see app/Http/Controllers/FacultyController.php:35
 * @route '/faculties/{faculty}'
 */
show.head = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\FacultyController::show
 * @see app/Http/Controllers/FacultyController.php:35
 * @route '/faculties/{faculty}'
 */
    const showForm = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\FacultyController::show
 * @see app/Http/Controllers/FacultyController.php:35
 * @route '/faculties/{faculty}'
 */
        showForm.get = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\FacultyController::show
 * @see app/Http/Controllers/FacultyController.php:35
 * @route '/faculties/{faculty}'
 */
        showForm.head = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\FacultyController::edit
 * @see app/Http/Controllers/FacultyController.php:40
 * @route '/faculties/{faculty}/edit'
 */
export const edit = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/faculties/{faculty}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FacultyController::edit
 * @see app/Http/Controllers/FacultyController.php:40
 * @route '/faculties/{faculty}/edit'
 */
edit.url = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { faculty: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { faculty: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    faculty: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        faculty: typeof args.faculty === 'object'
                ? args.faculty.id
                : args.faculty,
                }

    return edit.definition.url
            .replace('{faculty}', parsedArgs.faculty.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FacultyController::edit
 * @see app/Http/Controllers/FacultyController.php:40
 * @route '/faculties/{faculty}/edit'
 */
edit.get = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\FacultyController::edit
 * @see app/Http/Controllers/FacultyController.php:40
 * @route '/faculties/{faculty}/edit'
 */
edit.head = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\FacultyController::edit
 * @see app/Http/Controllers/FacultyController.php:40
 * @route '/faculties/{faculty}/edit'
 */
    const editForm = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\FacultyController::edit
 * @see app/Http/Controllers/FacultyController.php:40
 * @route '/faculties/{faculty}/edit'
 */
        editForm.get = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\FacultyController::edit
 * @see app/Http/Controllers/FacultyController.php:40
 * @route '/faculties/{faculty}/edit'
 */
        editForm.head = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\FacultyController::update
 * @see app/Http/Controllers/FacultyController.php:45
 * @route '/faculties/{faculty}'
 */
export const update = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/faculties/{faculty}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\FacultyController::update
 * @see app/Http/Controllers/FacultyController.php:45
 * @route '/faculties/{faculty}'
 */
update.url = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { faculty: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { faculty: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    faculty: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        faculty: typeof args.faculty === 'object'
                ? args.faculty.id
                : args.faculty,
                }

    return update.definition.url
            .replace('{faculty}', parsedArgs.faculty.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FacultyController::update
 * @see app/Http/Controllers/FacultyController.php:45
 * @route '/faculties/{faculty}'
 */
update.put = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\FacultyController::update
 * @see app/Http/Controllers/FacultyController.php:45
 * @route '/faculties/{faculty}'
 */
update.patch = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\FacultyController::update
 * @see app/Http/Controllers/FacultyController.php:45
 * @route '/faculties/{faculty}'
 */
    const updateForm = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\FacultyController::update
 * @see app/Http/Controllers/FacultyController.php:45
 * @route '/faculties/{faculty}'
 */
        updateForm.put = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\FacultyController::update
 * @see app/Http/Controllers/FacultyController.php:45
 * @route '/faculties/{faculty}'
 */
        updateForm.patch = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\FacultyController::destroy
 * @see app/Http/Controllers/FacultyController.php:59
 * @route '/faculties/{faculty}'
 */
export const destroy = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/faculties/{faculty}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\FacultyController::destroy
 * @see app/Http/Controllers/FacultyController.php:59
 * @route '/faculties/{faculty}'
 */
destroy.url = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { faculty: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { faculty: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    faculty: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        faculty: typeof args.faculty === 'object'
                ? args.faculty.id
                : args.faculty,
                }

    return destroy.definition.url
            .replace('{faculty}', parsedArgs.faculty.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FacultyController::destroy
 * @see app/Http/Controllers/FacultyController.php:59
 * @route '/faculties/{faculty}'
 */
destroy.delete = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\FacultyController::destroy
 * @see app/Http/Controllers/FacultyController.php:59
 * @route '/faculties/{faculty}'
 */
    const destroyForm = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\FacultyController::destroy
 * @see app/Http/Controllers/FacultyController.php:59
 * @route '/faculties/{faculty}'
 */
        destroyForm.delete = (args: { faculty: number | { id: number } } | [faculty: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const FacultyController = { index, create, store, show, edit, update, destroy }

export default FacultyController