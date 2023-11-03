import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import HomePage from "./page/HomePage";
import AboutPage from "./page/AboutPage";
import ProductPage from "./page/ProductPage";
import ProductDetailPage from "./page/ProductDetailPage";
import LoginPage from "./page/LoginPage";
import UserPage from "./page/UserPage";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
      path : '/',
        element : <App />
    },
    {
        path: "/home",
        element: <HomePage />,
    },
    {
        path: "/about",
        element: <AboutPage />,
    },
    {
        path: "/products",
        element: <ProductPage />,
    },
    {
        path: "/products/:id",
        element: <ProductDetailPage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/userInfo",
        element: <UserPage />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} >
        <App />
    </RouterProvider>
);

reportWebVitals();
