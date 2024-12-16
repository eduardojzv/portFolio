import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './providers/themeProviders.tsx'
import { I18nextProvider } from 'react-i18next'
import i18next from './translations/i18n.ts'
createRoot(document.getElementById('root')!).render(
    <ThemeProvider>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </ThemeProvider>
)
