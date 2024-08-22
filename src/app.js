import { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Menu } from '@components/menu'
import {
  AgendaView,
  CfaView,
  HomeView,
  MarkdownView,
  NotFoundView,
  RegistrationView,
  TravelView,
} from './views'

import { Header, Footer } from '@components/layout'

const menuOptions = [
  {
    path: '/',
    label: 'Home',
    view: <HomeView />,
  },
  {
    path: '/registration',
    label: 'Registration',
    view: <RegistrationView />,
  },
  {
    path: '/travel',
    label: 'Travel Info',
    view: <TravelView />,
  },
  {
    path: '/cfa',
    label: 'Calls for Action',
    view: <CfaView />,
  },
  {
    path: '/agenda',
    label: 'Agenda',
    view: <AgendaView />,
  }
]

//

export const App = () => {
  return (
    <Fragment>
      <Header />
      <Menu options={ menuOptions } />
      <main>
        <Routes>
          {
            // we'll build the routes from the main menu items.
            // note this implementation only supports a flat,
            // one-level navigation structure.
            menuOptions.map(({ path, view, label }) => (
              <Route
                key={ `route-${ label }` }
                path={ path }
                element={ view }
              />
            ))
          }
          <Route path="__markdown" element={ <MarkdownView /> } />
          <Route path="*" element={ <NotFoundView /> } />
        </Routes>
      </main>

      <Footer />
    </Fragment>
  )
}
