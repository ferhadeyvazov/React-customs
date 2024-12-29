import React, {lazy} from 'react'

export const lazyWithRetryAndPrefetching = (componentImport):React.LazyExoticComponent<React.ComponentType<any>> => {
    const factory = async () => {
        try {
            return await componentImport();
        } catch (error) {
            console.error(error);
            return window.location.reload();
        }
    };

    const Component = lazy(factory);

    Component.prefetch = factory;

    return Component;
};

// Usage
const HomePage = lazyWithRetryAndPrefetching(() => import('./HomePage'));