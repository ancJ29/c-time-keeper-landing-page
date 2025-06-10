import { RouteConfig } from '@/types'
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const routeConfigs: RouteConfig[] = [
  {
    path: '/*',
    element: () => <Navigate to="/" />,
  },
  {
    path: '/',
    element: lazy(() => import('@/pages/register')),
  },
  {
    path: '/terms-of-service',
    element: lazy(() => import('@/pages/terms-of-service')),
  },
  {
    path: '/privacy-policy',
    element: lazy(() => import('@/pages/privacy-policy')),
  },
]

const guestRoutes = routeConfigs.map(({ path, element: Component, wrapper: Wrapper }) => ({
  path,
  element: Wrapper ? (
    <Wrapper>
      <Component />
    </Wrapper>
  ) : (
    <Component />
  ),
}))

export default guestRoutes
