import Registration from '@content/registration.mdx'

import { Page } from '@components/layout'
import { componentMap } from "@components/markdown"

export const RegistrationView = () => {
  return (
    <Page
      title="Registration"
      description="Register for the KNIT workshop"
    >
      <Registration components={componentMap} />
    </Page>
  )
}