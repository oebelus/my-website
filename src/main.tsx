import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from "react-router-dom";
import {About, Blog, Gallery, Now, Projects } from './utils/imports'
import App from './App.tsx'
import { HelmetProvider } from 'react-helmet-async';
import Drawings from './pages/Drawings.tsx';
import BlogPostPage from './pages/BlogPostPage.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<About/>} />
      <Route path='projects' element={<Projects/>} />
      <Route path='blog' element={<Blog/>} />
      <Route path='blog/:postId' element={<BlogPostPage/>} />
      <Route path='now' element={<Now/>} />
      <Route path='gallery' element={<Gallery/>} />
      <Route path='gallery/drawings' element={<Drawings/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
)
