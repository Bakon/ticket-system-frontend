import React from 'react';
import Login from './login';
import Register from './register';

export const routes = [
    {Component: Login, path: '/login', exact: true},
    {Component: Register, path: '/register', exact: true}
];
