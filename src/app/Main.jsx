import { lazy } from 'solid-js'
import { useRoutes } from 'solid-app-router'
import MapControls from './parts/MapControls'
import MainInterface from './parts/MainInterface'
import ViewLocations from './map-integration/ViewLocations'
import EditNewLocations from './map-integration/EditNewLocations'

const routes = [ {
  path: "/about",
  component: lazy(() => import('./pages/About'))
}, {
  path: "/contact",
  component: lazy(() => import('./pages/Contact'))
}, {
  path: "/terms",
  component: lazy(() => import('./pages/Terms'))
} ]

export default () => {
  const Page = useRoutes(routes)

  return (
    <>
      <div id="map">
        <MapControls />
      </div>
      <Page />
      <MainInterface />
      {/* Views rendered in map elements */}
      <ViewLocations />
      <EditNewLocations />
    </>
  )
}
