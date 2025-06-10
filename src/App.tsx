import LoadingOverlay from '@/components/LoadingOverlay'
import { resolver, theme } from '@/configs/themes'
import routes from '@/routes'
import loadingStore from '@/services/request/store/loading'
import { MantineProvider } from '@mantine/core'
import { Suspense, useSyncExternalStore } from 'react'
import { useRoutes } from 'react-router-dom'

export default function App() {
  const loadingGlobal = useSyncExternalStore(loadingStore.subscribe, loadingStore.getSnapshot)

  return (
    <MantineProvider theme={theme} cssVariablesResolver={resolver}>
      <LoadingOverlay visible={loadingGlobal} />
      <Suspense fallback={<LoadingOverlay />}>{useRoutes(routes)}</Suspense>
    </MantineProvider>
  )
}
