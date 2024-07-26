import { Button } from '@mui/joy'
import { Link } from '@components/link'

export const button = ({ linkto, children }) => {
  if (typeof children !== 'string') {
    return <Button>{ children }</Button>
  }
  if (!linkto) {
    return <Button>{ children }</Button>
  }

  return (
    <Button
      component={Link}
      to={ linkto }
      button
      size="lg"
     >{ children }
    </Button>
  )
}
