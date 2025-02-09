import { Fragment } from 'react'
import { BaseLinkPropTypes } from './'
import { ExternalLinkIcon } from '../icons'
import { Button, Link } from '@mui/joy'

export const ExternalLink = ({ to, children, button, ...props }) => {
  return (
    <Fragment>
      { button ? (
        <Button
          component="a"
          href={to}
          endDecorator={<ExternalLinkIcon color="#fff"/> }
          size="lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </Button>
      ) : (
        <Fragment>
          <Link
            component={ button? "button": null}
            href={ to }
            target="_blank"
            rel="noopener noreferrer"
            { ...props }
          >{ children }<ExternalLinkIcon /> </Link>
          
        </Fragment>
      )}
    </Fragment>
  )
}

ExternalLink.propTypes = { ...BaseLinkPropTypes }

