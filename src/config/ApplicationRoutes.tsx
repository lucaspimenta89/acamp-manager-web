import React from 'react'

// Layouts

import MainLayout from '../layout/Main'

// PAGES
import Home from '../pages/home/Home'
import SignUp from '../pages/sign-up/SignUp'
import SignIn from '../pages/sign-in/SignIn'
import ResetPassword from '../pages/reset-password/ResetPassword'

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
  }
]

export default routes