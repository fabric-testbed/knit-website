import { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import {
  Container,
  SIZES,
} from '@components/layout'

const containerSizes = Object.keys(SIZES)

export const Page = ({
  children,
  title,
  description,
  size,
}) => {
  return (
    <Fragment>
      <Helmet>
        <title>{ title ? `${ title } | KNIT Workshop` : 'KNIT Workshop' }</title>
        <meta name="description" content={ description } />
      </Helmet>

      <Container size={ size }>
        { children }
      </Container>
    </Fragment>
  )
}

Page.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  size: PropTypes.oneOf(containerSizes),
}
