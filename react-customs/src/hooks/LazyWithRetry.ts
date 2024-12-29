import React, { lazy } from "react";


export const lazyWithRetry = (componentImport:any):React.LazyExoticComponent<React.ComponentType<any>> => 
  lazy(async () => { 
    try { 
      return await componentImport(); 
    } catch (error) { 
      console.error(error); 
      return window.location.reload(); 
    } 
  });

  // Usage
// const HomePage = lazyWithRetry(() => import('./HomePage'));