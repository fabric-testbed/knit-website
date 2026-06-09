import Agenda from '@content/agenda.mdx'

import { Page } from '@components/layout'
import { componentMap } from "@components/markdown"

export const AgendaView = () => {
  return (
    <Page title="Agenda" description="KNIT Workshop Agenda">
      <Agenda components={componentMap} />
    </Page>
  )
}
