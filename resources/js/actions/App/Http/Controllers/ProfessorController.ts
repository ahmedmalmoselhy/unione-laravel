import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ProfessorController::index
 * @see app/Http/Controllers/ProfessorController.php:12
 * @route '/professors'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/professors',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProfessorController::index
 * @see app/Http/Controllers/ProfessorController.php:12
 * @route '/professors'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProfessorController::index
 * @see app/Http/Controllers/ProfessorController.php:12
 * @route '/professors'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProfessorController::index
 * @see app/Http/Controllers/ProfessorController.php:12
 * @route '/professors'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProfessorController::index
 * @see app/Http/Controllers/ProfessorController.php:12
 * @route '/professors'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProfessorController::index
 * @see app/Http/Controllers/ProfessorController.php:12
 * @route '/professors'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProfessorController::index
 * @see app/Http/Controllers/ProfessorController.php:12
 * @route '/professors'
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
* @see \App\Http\Controllers\ProfessorController::create
 * @see app/Http/Controllers/ProfessorController.php:20
 * @route '/professors/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/professors/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProfessorController::create
 * @see app/Http/Controllers/ProfessorController.php:20
 * @route '/professors/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProfessorController::create
 * @see app/Http/Controllers/ProfessorController.php:20
 * @route '/professors/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProfessorController::create
 * @see app/Http/Controllers/ProfessorController.php:20
 * @route '/professors/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProfessorController::create
 * @see app/Http/Controllers/ProfessorController.php:20
 * @route '/professors/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProfessorController::create
 * @see app/Http/Controllers/ProfessorController.php:20
 * @route '/professors/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProfessorController::create
 * @see app/Http/Controllers/ProfessorController.php:20
 * @route '/professors/create'
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
* @see \App\Http\Controllers\ProfessorController::store
 * @see app/Http/Controllers/ProfessorController.php:26
 * @route '/professors'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/professors',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ProfessorController::store
 * @see app/Http/Controllers/ProfessorController.php:26
 * @route '/professors'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProfessorController::store
 * @see app/Http/Controllers/ProfessorController.php:26
 * @route '/professors'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ProfessorController::store
 * @see app/Http/Controllers/ProfessorController.php:26
 * @route '/professors'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ProfessorController::store
 * @see app/Http/Controllers/ProfessorController.php:26
 * @route '/professors'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\ProfessorController::show
 * @see app/Http/Controllers/ProfessorController.php:48
 * @route '/professors/{professor}'
 */
export const show = (args: { professor: number | { id: number } } | [professor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/professors/{professor}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProfessorController::show
 * @see app/Http/Controllers/ProfessorController.php:48
 * @route '/professors/{professor}'
 */
show.url = (args: { professor: number | { id: number } } | [professor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { professor: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { professor: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    professor: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        professor: typeof args.professor === 'object'
                ? args.professor.id
                : args.professor,
                }

    return show.definition.url
            .replace('{professor}', parsedArgs.professor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProfessorController::show
 * @see app/Http/Controllers/ProfessorController.php:48
 * @route '/professors/{professor}'
 */
show.get = (args: { professor: number | { id: number } } | [professor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProfessorController::show
 * @see app/Http/Controllers/ProfessorController.php:48
 * @route '/professors/{professor}'
 */
show.head = (args: { professor: number | { id: number } } | [professor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProfessorController::show
 * @see app/Http/Controllers/ProfessorController.php:48
 * @route '/professors/{professor}'
 */
    const showForm = (args: { professor: number | { id: number } } | [professor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProfessorController::show
 * @see app/Http/Controllers/ProfessorController.php:48
 * @route '/professors/{professor}'
 */
        showForm.get = (args: { professor: number | { id: number } } | [professor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProfessorController::show
 * @see app/Http/Controllers/ProfessorController.php:48
 * @route '/professors/{professor}'
 */
        showForm.head = (args: { professor: number | { id: number } } | [professor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ProfessorController::edit
 * @see app/Http/Controllers/ProfessorController.php:54
 * @route '/professors/{professor}/edit'
 */
export const edit = (args: { professor: number | { id: number } } | [professor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/professors/{professor}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProfessorController::edit
 * @see app/Http/Controllers/ProfessorController.php:54
 * @route '/professors/{professor}/edit'
 */
edit.url = (args: { professor: number | { id: number } } | [professor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { professor: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { professor: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    professor: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        professor: typeof args.professor === 'object'
                ? args.professor.id
                : args.professor,
                }

    return edit.definition.url
            .replace('{professor}', parsedArgs.professor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProfessorController::edit
 * @see app/Http/Controllers/ProfessorController.php:54
 * @route '/professors/{professor}/edit'
 */
edit.get = (args: { professor: number | { id: number } } | [professor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProfessorController::edit
 * @see app/Http/Controllers/ProfessorController.php:54
 * @route '/professors/{professor}/edit'
 */
edit.head = (args: { professor: number | { id: number } } | [professor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProfessorController::edit
 * @see app/Http/Controllers/ProfessorController.php:54
 * @route '/professors/{professor}/edit'
 */
    const editForm = (args: { professor: number | { id: number } } | [professor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProfessorController::edit
 * @see app/Http/Controllers/ProfessorController.php:54
 * @route '/professors/{professor}/edit'
 */
        editForm.get = (args: { professor: number | { id: number } } | [professor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProfessorController::edit
 * @see app/Http/Controllers/ProfessorController.php:54
 * @route '/professors/{professor}/edit'
 */
        editForm.head = (args: { professor: number | { id: number } } | [professor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ProfessorController::update
 * @see app/Http/Controllers/ProfessorController.php:61
 * @route '/professors/{professor}'
 */
export const update = (args: { professor: number | { id: number } } | [professor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/professors/{professor}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\ProfessorController::update
 * @see app/Http/Controllers/ProfessorController.php:61
 * @route '/professors/{professor}'
 */
update.url = (args: { professor: number | { id: number } } | [professor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { professor: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { professor: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    professor: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        professor: typeof args.professor === 'object'
                ? args.professor.id
                : args.professor,
                }

    return update.definition.url
            .replace('{professor}', parsedArgs.professor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProfessorController::update
 * @see app/Http/Controllers/ProfessorController.php:61
 * @route '/professors/{professor}'
 */
update.put = (args: { professor: number | { id: number } } | [professor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\ProfessorController::update
 * @see app/Http/Controllers/ProfessorController.php:61
 * @route '/professors/{professor}'
 */
update.patch = (args: { professor: number | { id: number } } | [professor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\ProfessorController::update
 * @see app/Http/Controllers/ProfessorController.php:61
 * @route '/professors/{professor}'
 */
    const updateForm = (args: { professor: number | { id: number } } | [professor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ProfessorController::update
 * @see app/Http/Controllers/ProfessorController.php:61
 * @route '/professors/{professor}'
 */
        updateForm.put = (args: { professor: number | { id: number } } | [professor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\ProfessorController::update
 * @see app/Http/Controllers/ProfessorController.php:61
 * @route '/professors/{professor}'
 */
        updateForm.patch = (args: { professor: number | { id: number } } | [professor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\ProfessorController::destroy
 * @see app/Http/Controllers/ProfessorController.php:88
 * @route '/professors/{professor}'
 */
export const destroy = (args: { professor: number | { id: number } } | [professor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/professors/{professor}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ProfessorController::destroy
 * @see app/Http/Controllers/ProfessorController.php:88
 * @route '/professors/{professor}'
 */
destroy.url = (args: { professor: number | { id: number } } | [professor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { professor: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { professor: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    professor: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        professor: typeof args.professor === 'object'
                ? args.professor.id
                : args.professor,
                }

    return destroy.definition.url
            .replace('{professor}', parsedArgs.professor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProfessorController::destroy
 * @see app/Http/Controllers/ProfessorController.php:88
 * @route '/professors/{professor}'
 */
destroy.delete = (args: { professor: number | { id: number } } | [professor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\ProfessorController::destroy
 * @see app/Http/Controllers/ProfessorController.php:88
 * @route '/professors/{professor}'
 */
    const destroyForm = (args: { professor: number | { id: number } } | [professor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ProfessorController::destroy
 * @see app/Http/Controllers/ProfessorController.php:88
 * @route '/professors/{professor}'
 */
        destroyForm.delete = (args: { professor: number | { id: number } } | [professor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const ProfessorController = { index, create, store, show, edit, update, destroy }

export default ProfessorController