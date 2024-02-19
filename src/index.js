import { App } from './app'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CssVarsProvider } from '@mui/joy/styles'
import { theme } from './theme'

const container = document.getElementById('root')
const root = createRoot(container)

const ProvisionedApp = () => (
  <CssVarsProvider theme={ theme }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CssVarsProvider>
)

root.render(<ProvisionedApp />)
