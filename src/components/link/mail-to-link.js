import { Fragment } from 'react'
import { BaseLinkPropTypes } from './'
import { MailtoLinkIcon } from '../icons'

export const MailtoLink = ({ to, children }) => {
  return (
    <Fragment>
      <a href={ to }>{ children }</a>
      <MailtoLinkIcon />
    </Fragment>
  )
}

MailtoLink.propTypes = { ...BaseLinkPropTypes }