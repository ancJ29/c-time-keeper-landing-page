import LoadingOverlay from '@/components/LoadingOverlay'
import { resolver, theme } from '@/configs/themes'
import routes from '@/routes'
import loadingStore from '@/services/request/store/loading'
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { Suspense, useSyncExternalStore } from 'react'
import { useRoutes } from 'react-router-dom'

export default function App() {
  const loadingGlobal = useSyncExternalStore(loadingStore.subscribe, loadingStore.getSnapshot)

  return (
    <MantineProvider theme={theme} cssVariablesResolver={resolver}>
      <Notifications position="top-right" zIndex={1000} w={300} />
      <LoadingOverlay visible={loadingGlobal} />
      <Suspense fallback={<LoadingOverlay />}>{useRoutes(routes)}</Suspense>
    </MantineProvider>
  )
}
