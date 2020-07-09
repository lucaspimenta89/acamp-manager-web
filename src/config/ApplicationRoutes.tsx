import React from 'react'

// Layouts

import MainLayout from '../layout/Main'

// PAGES
import Home from '../pages/home/Home'
import SignUp from '../pages/sign-up/SignUp'

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
  }
]

export default routes