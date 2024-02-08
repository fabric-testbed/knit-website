import PropTypes from 'prop-types'
import { Link } from '../link'
import fabricLogo from '../../images/fabric-brand.png'

const SIZES = {
  tiny: 40,
  small: 80,
  medium: 150,
  large: 200,
}

export const Brand = ({ size }) => {

  return (
    <Link to="/">
      <img src={ fabricLogo } width={ SIZES?.[size] || SIZES.large } />
    </Link>
  )  
}

Brand.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
}
