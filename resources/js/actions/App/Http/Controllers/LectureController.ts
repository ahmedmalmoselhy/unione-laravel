import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\LectureController::index
 * @see app/Http/Controllers/LectureController.php:13
 * @route '/lectures'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/lectures',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LectureController::index
 * @see app/Http/Controllers/LectureController.php:13
 * @route '/lectures'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LectureController::index
 * @see app/Http/Controllers/LectureController.php:13
 * @route '/lectures'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LectureController::index
 * @see app/Http/Controllers/LectureController.php:13
 * @route '/lectures'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LectureController::index
 * @see app/Http/Controllers/LectureController.php:13
 * @route '/lectures'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LectureController::index
 * @see app/Http/Controllers/LectureController.php:13
 * @route '/lectures'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LectureController::index
 * @see app/Http/Controllers/LectureController.php:13
 * @route '/lectures'
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
* @see \App\Http\Controllers\LectureController::create
 * @see app/Http/Controllers/LectureController.php:19
 * @route '/lectures/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/lectures/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LectureController::create
 * @see app/Http/Controllers/LectureController.php:19
 * @route '/lectures/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LectureController::create
 * @see app/Http/Controllers/LectureController.php:19
 * @route '/lectures/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LectureController::create
 * @see app/Http/Controllers/LectureController.php:19
 * @route '/lectures/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LectureController::create
 * @see app/Http/Controllers/LectureController.php:19
 * @route '/lectures/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LectureController::create
 * @see app/Http/Controllers/LectureController.php:19
 * @route '/lectures/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LectureController::create
 * @see app/Http/Controllers/LectureController.php:19
 * @route '/lectures/create'
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
* @see \App\Http\Controllers\LectureController::store
 * @see app/Http/Controllers/LectureController.php:27
 * @route '/lectures'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/lectures',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\LectureController::store
 * @see app/Http/Controllers/LectureController.php:27
 * @route '/lectures'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LectureController::store
 * @see app/Http/Controllers/LectureController.php:27
 * @route '/lectures'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\LectureController::store
 * @see app/Http/Controllers/LectureController.php:27
 * @route '/lectures'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\LectureController::store
 * @see app/Http/Controllers/LectureController.php:27
 * @route '/lectures'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\LectureController::show
 * @see app/Http/Controllers/LectureController.php:47
 * @route '/lectures/{lecture}'
 */
export const show = (args: { lecture: number | { id: number } } | [lecture: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/lectures/{lecture}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LectureController::show
 * @see app/Http/Controllers/LectureController.php:47
 * @route '/lectures/{lecture}'
 */
show.url = (args: { lecture: number | { id: number } } | [lecture: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { lecture: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { lecture: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    lecture: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        lecture: typeof args.lecture === 'object'
                ? args.lecture.id
                : args.lecture,
                }

    return show.definition.url
            .replace('{lecture}', parsedArgs.lecture.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LectureController::show
 * @see app/Http/Controllers/LectureController.php:47
 * @route '/lectures/{lecture}'
 */
show.get = (args: { lecture: number | { id: number } } | [lecture: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LectureController::show
 * @see app/Http/Controllers/LectureController.php:47
 * @route '/lectures/{lecture}'
 */
show.head = (args: { lecture: number | { id: number } } | [lecture: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LectureController::show
 * @see app/Http/Controllers/LectureController.php:47
 * @route '/lectures/{lecture}'
 */
    const showForm = (args: { lecture: number | { id: number } } | [lecture: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LectureController::show
 * @see app/Http/Controllers/LectureController.php:47
 * @route '/lectures/{lecture}'
 */
        showForm.get = (args: { lecture: number | { id: number } } | [lecture: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LectureController::show
 * @see app/Http/Controllers/LectureController.php:47
 * @route '/lectures/{lecture}'
 */
        showForm.head = (args: { lecture: number | { id: number } } | [lecture: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\LectureController::edit
 * @see app/Http/Controllers/LectureController.php:53
 * @route '/lectures/{lecture}/edit'
 */
export const edit = (args: { lecture: number | { id: number } } | [lecture: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/lectures/{lecture}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LectureController::edit
 * @see app/Http/Controllers/LectureController.php:53
 * @route '/lectures/{lecture}/edit'
 */
edit.url = (args: { lecture: number | { id: number } } | [lecture: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { lecture: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { lecture: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    lecture: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        lecture: typeof args.lecture === 'object'
                ? args.lecture.id
                : args.lecture,
                }

    return edit.definition.url
            .replace('{lecture}', parsedArgs.lecture.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LectureController::edit
 * @see app/Http/Controllers/LectureController.php:53
 * @route '/lectures/{lecture}/edit'
 */
edit.get = (args: { lecture: number | { id: number } } | [lecture: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LectureController::edit
 * @see app/Http/Controllers/LectureController.php:53
 * @route '/lectures/{lecture}/edit'
 */
edit.head = (args: { lecture: number | { id: number } } | [lecture: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LectureController::edit
 * @see app/Http/Controllers/LectureController.php:53
 * @route '/lectures/{lecture}/edit'
 */
    const editForm = (args: { lecture: number | { id: number } } | [lecture: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LectureController::edit
 * @see app/Http/Controllers/LectureController.php:53
 * @route '/lectures/{lecture}/edit'
 */
        editForm.get = (args: { lecture: number | { id: number } } | [lecture: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LectureController::edit
 * @see app/Http/Controllers/LectureController.php:53
 * @route '/lectures/{lecture}/edit'
 */
        editForm.head = (args: { lecture: number | { id: number } } | [lecture: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\LectureController::update
 * @see app/Http/Controllers/LectureController.php:61
 * @route '/lectures/{lecture}'
 */
export const update = (args: { lecture: number | { id: number } } | [lecture: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/lectures/{lecture}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\LectureController::update
 * @see app/Http/Controllers/LectureController.php:61
 * @route '/lectures/{lecture}'
 */
update.url = (args: { lecture: number | { id: number } } | [lecture: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { lecture: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { lecture: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    lecture: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        lecture: typeof args.lecture === 'object'
                ? args.lecture.id
                : args.lecture,
                }

    return update.definition.url
            .replace('{lecture}', parsedArgs.lecture.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LectureController::update
 * @see app/Http/Controllers/LectureController.php:61
 * @route '/lectures/{lecture}'
 */
update.put = (args: { lecture: number | { id: number } } | [lecture: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\LectureController::update
 * @see app/Http/Controllers/LectureController.php:61
 * @route '/lectures/{lecture}'
 */
update.patch = (args: { lecture: number | { id: number } } | [lecture: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\LectureController::update
 * @see app/Http/Controllers/LectureController.php:61
 * @route '/lectures/{lecture}'
 */
    const updateForm = (args: { lecture: number | { id: number } } | [lecture: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\LectureController::update
 * @see app/Http/Controllers/LectureController.php:61
 * @route '/lectures/{lecture}'
 */
        updateForm.put = (args: { lecture: number | { id: number } } | [lecture: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\LectureController::update
 * @see app/Http/Controllers/LectureController.php:61
 * @route '/lectures/{lecture}'
 */
        updateForm.patch = (args: { lecture: number | { id: number } } | [lecture: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\LectureController::destroy
 * @see app/Http/Controllers/LectureController.php:81
 * @route '/lectures/{lecture}'
 */
export const destroy = (args: { lecture: number | { id: number } } | [lecture: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/lectures/{lecture}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\LectureController::destroy
 * @see app/Http/Controllers/LectureController.php:81
 * @route '/lectures/{lecture}'
 */
destroy.url = (args: { lecture: number | { id: number } } | [lecture: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { lecture: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { lecture: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    lecture: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        lecture: typeof args.lecture === 'object'
                ? args.lecture.id
                : args.lecture,
                }

    return destroy.definition.url
            .replace('{lecture}', parsedArgs.lecture.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LectureController::destroy
 * @see app/Http/Controllers/LectureController.php:81
 * @route '/lectures/{lecture}'
 */
destroy.delete = (args: { lecture: number | { id: number } } | [lecture: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\LectureController::destroy
 * @see app/Http/Controllers/LectureController.php:81
 * @route '/lectures/{lecture}'
 */
    const destroyForm = (args: { lecture: number | { id: number } } | [lecture: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\LectureController::destroy
 * @see app/Http/Controllers/LectureController.php:81
 * @route '/lectures/{lecture}'
 */
        destroyForm.delete = (args: { lecture: number | { id: number } } | [lecture: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const LectureController = { index, create, store, show, edit, update, destroy }

export default LectureController