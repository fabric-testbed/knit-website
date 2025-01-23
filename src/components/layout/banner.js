import { Alert as MUIAlert} from '@mui/joy'
import Link from '@mui/joy/Link'
import Parser from 'html-react-parser'
import moment from 'moment';

const checkNotExpired = (start, end) => {
  const startUTC = start.substring(0, 19);
  const stillStartUTC = moment.utc(startUTC).toDate();
  const endUTC = end.substring(0, 19);
  const stillEndUTC = moment.utc(endUTC).toDate();
  return stillEndUTC > new Date() && stillStartUTC < new Date();
}

export const Banner = () => {
  const bannerContent = {
    "content": "FABRIC invites nominations for four awards recognizing innovative uses of FABRIC resources—Best Published Paper, Best FABRIC Matrix, Best FABRIC Experiment, and Best Classroom Use of FABRIC — submissions due by <b>Monday, February 24 at 11:59 PM ET</b>, and winners announced at KNIT10.",
    "end_date": "2025-02-25 00:00:00+00:00",
    "link": "https://docs.google.com/forms/d/e/1FAIpQLSeTp3i2iDhB7bHgN8ryMxZci8ya87yjeQd7_JMZImUodNinVA/viewform",
    "start_date": "2025-01-22 00:00:00+00:00",
    "button": ">>> Submit Form"
  }

  return (
    checkNotExpired(bannerContent.start_date, bannerContent.end_date) &&
    <MUIAlert
      color="warning"
      size="md"
      variant="soft"
    >
      <span>{Parser(bannerContent.content)}
      <Link 
        href={bannerContent.link}
        target="_blank"
        rel="noreferrer"
        sx={{ marginLeft: '20px' }}
      >
        {bannerContent.button}
      </Link></span>
    </MUIAlert>
  )
}
