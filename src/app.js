import { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Menu } from '@components/menu'
import {
  CfpView,
  HomeView,
  MarkdownView,
  NotFoundView,
  RegistrationView,
  SpeakersView,
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
    path: '/cfp',
    label: 'CFP',
    view: <CfpView />,
  },
  {
    path: '/travel',
    label: 'Travel Info',
    view: <TravelView />,
  },
  {
    path: '/speakers',
    label: 'Speakers',
    view: <SpeakersView />,
  },
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
