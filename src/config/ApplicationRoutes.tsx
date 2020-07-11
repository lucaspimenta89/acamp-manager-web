import React from 'react'

// Layouts

import MainLayout from '../layout/Main'

// PAGES
import Home from '../pages/home/Home'
import SignUp from '../pages/sign-up/SignUp'
import SignIn from '../pages/sign-in/SignIn'
import ResetPassword from '../pages/reset-password/ResetPassword'
import Dashboard from '../pages/dashboard/Dashboard'
import Orders from '../pages/orders-management/OrdersManagement'

export interface IRouteDefinition {
  id: string,
  path: string,
  component: any
}

const routes: IRouteDefinition[] = [
  {
    id: 'home',
    path: '/',
    component: Home
  },
  {
    id: 'sign-up',
    path: '/sign-up',
    component: (props: any) => (
      <MainLayout {...props}>
        <SignUp {...props} />
      </MainLayout>
    )
  },
  {
    id: 'sign-in',
    path: '/sign-in',
    component: (props: any) => (
      <MainLayout {...props}>
        <SignIn {...props} />
      </MainLayout>
    )
  },
  {
    id: 'reset-password',
    path: '/reset-password/:token',
    component: (props: any) => (
      <MainLayout {...props}>
        <ResetPassword {...props} />
      </MainLayout>
    )
  },
  {
    id: 'dashboard',
    path: '/dashboard',
    component: (props: any) => (
      <MainLayout {...props}>
        <Dashboard {...props} />
      </MainLayout>
    )
  }, 
  {
    id: 'orders',
    path: '/orders',
    component: (props: any) => (
      <MainLayout {...props}>
        <Orders {...props} />
      </MainLayout>
    )
  }
]

export default routes