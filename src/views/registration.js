import registration from '@content/registration.md'

import { Page } from '@components/layout'
import { Markdown } from '@components/markdown'

export const RegistrationView = () => {
  return (
    <Page
      title="Registration"
      description="Register for the KNIT workshop"
    >
      <Markdown>{ registration }</Markdown>
    </Page>
  )
}