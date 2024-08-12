import PropTypes from 'prop-types'
import { Link as ReactLink } from 'react-router-dom'
import { NavLink as ReactNavLink } from 'react-router-dom'
import { ExternalLink } from './'
import { MailtoLink } from './'
//

export const BaseLinkPropTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

//

export const Link = ({ nav, to, children, ...props }) => {
  // if this is a navigation menu link, we can bail out now.
  if (nav) {
    return <ReactNavLink to={ to } { ...props }>{ children }</ReactNavLink>    
  }
  // otherwise, we'll to determine the type of link and
  // decorate it with an icon accordingly.
  const externalUrlPattern = new RegExp(/^https?:\/\//)
  const externalUrlMatch = externalUrlPattern.exec(to)
  const mailtoPattern = new RegExp(/^mailto:/)
  const mailtoMatch = mailtoPattern.exec(to)
  const LinkComponent = externalUrlMatch
    ? ExternalLink
      : mailtoMatch
        ? MailtoLink
        : ReactLink
  return <LinkComponent to={to} { ...props }>{children}</LinkComponent>
}

Link.propTypes = {
  nav: PropTypes.bool,
  ...BaseLinkPropTypes
}

Link.defaultProps = {
  nav: false,
}

//