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
  Knit9View,
} from './views'

import { Header, Footer } from '@components/layout'

const pastKnits = [
  { path: '/past-knits/knit9', label: 'KNIT 9'},
  { path: 'https://learn.fabric-testbed.net/knowledge-base/knit-8-a-fabric-community-workshop/', label: 'KNIT 8' },
  { path: 'https://learn.fabric-testbed.net/knowledge-base/knit-7-a-fabric-community-workshop/', label: 'KNIT 7' },
  {
    label: 'Additional KNITs',
    subsubItems: [
      { path: 'https://learn.fabric-testbed.net/knowledge-base/knit-6-a-fabric-community-workshop/', label: 'KNIT 6' },
      { path: 'https://learn.fabric-testbed.net/knowledge-base/knit-5-a-fabric-community-workshop/', label: 'KNIT 5' },
      { path: 'https://learn.fabric-testbed.net/knowledge-base/knit-winter-21-a-fabric-community-workshop', label: 'KNIT 4' },
    ],
  },
]

const menuOptions = [
  { path: '/', label: 'Home' },
  { path: '/registration', label: 'Registration' },
  { path: '/travel', label: 'Travel Info' },
  { path: '/cfa', label: 'Calls for Action' },
  { path: '/agenda', label: 'Agenda' },
  {
    label: 'Past KNITs',
    path: '/past-knits', // Parent path
    subItems: pastKnits,
  },
];

export const App = () => {
  return (
    <Fragment>
      <Header />
      <Menu options={ menuOptions } />
      <main>
        <Routes>
          <Route path="/" element={ <HomeView /> } />
          <Route path="/registration" element={ <RegistrationView /> } />
          <Route path="/travel" element={ <TravelView /> } />
          <Route path="/cfa" element={ <CfaView /> } />
          <Route path="/agenda" element={ <AgendaView /> } />
          <Route path="/past-knits">
            <Route path="knit9" element={ <Knit9View /> } />
          </Route>

          <Route path="__markdown" element={ <MarkdownView /> } />
          <Route path="*" element={ <NotFoundView /> } />
        </Routes>
      </main>

      <Footer />
    </Fragment>
  )
}
