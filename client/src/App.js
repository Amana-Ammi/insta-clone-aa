import React, {lazy, Suspense} from 'react';

const Dashboard = lazy(() => import('./pages/dashboard'));
const Login = lazy(() => import('./pages/login'));
const SignUp = lazy(() => import('./pages/signup'));
const Profile = lazy(() => import('./pages/profile'));
const NOT_FOUND = lazy(() => import('./pages/not-found'));
