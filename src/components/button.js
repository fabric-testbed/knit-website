import PropTypes from 'prop-types'
import { Button as MUIButton} from '@mui/joy'
import { Link } from '@components/link'

export const Button = ({ linkto, children }) => {
  if (typeof children !== 'string') {
    return <MUIButton>{ children }</MUIButton>
  }
  if (!linkto) {
    return <MUIButton>{ children }</MUIButton>
  }

  return (
    <MUIButton
      component={Link}
      to={ linkto }
      button
      size="lg"
     >{ children }
    </MUIButton>
  )
}

Button.propTypes = {
  linkto: PropTypes.string,
  children: PropTypes.node,
}