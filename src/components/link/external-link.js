import { Fragment } from 'react'
import { BaseLinkPropTypes } from './'
import { ExternalLinkIcon } from './'
import { Button } from '@mui/joy'

export const ExternalLink = ({ to, children, ...props }) => {
  return (
    <Fragment>
      <a
        href={ to }
        target="_blank"
        rel="noopener noreferrer"
        { ...props }
      >{ children }</a>
      <ExternalLinkIcon />
    </Fragment>
  )
}

ExternalLink.propTypes = { ...BaseLinkPropTypes }

