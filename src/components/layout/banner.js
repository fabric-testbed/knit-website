import { Alert as MUIAlert} from '@mui/joy'
import Link from '@mui/joy/Link';

export const Banner = () => {

  return (
    <MUIAlert
      color="warning"
      size="md"
      variant="soft"
    >
      <span>FABRIC invites nominations for four awards recognizing innovative uses of FABRIC resources—Best Published Paper, Best FABRIC Matrix, Best FABRIC Experiment, and Best Classroom Use of FABRIC— submissions due by Friday, February 24 at 11:59 PM ET, and winners announced at KNIT10.
      <Link 
        href="https://docs.google.com/forms/d/e/1FAIpQLSeTp3i2iDhB7bHgN8ryMxZci8ya87yjeQd7_JMZImUodNinVA/viewform"
        target="_blank"
        rel="noreferrer"
        sx={{ marginLeft: '20px' }}
      >
        {">>> Submit Form"}
      </Link></span>
    </MUIAlert>
  )
}
