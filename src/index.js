import { App } from './app'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CssVarsProvider } from '@mui/joy/styles'
import { theme } from './theme'

const container = document.getElementById('root')
const root = createRoot(container)

const ProvisionedApp = () => (
  <CssVarsProvider theme={ theme }>
    <BrowserRouter basename={
      // include basename in production deployment
      // this is due to the way github pages deploys
      // the base url for this site should be the 
      // following for the purposes of DNS records.
      // https://fabric-testbed.github.io/knit-website 
      // this step is not necessary in development
      process.env.NODE_ENV !== 'production'
        ? '' : '/knit-website'
    }>
      <App />
    </BrowserRouter>
  </CssVarsProvider>
)

root.render(<ProvisionedApp />)
