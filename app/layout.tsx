/* Components */
import { Providers } from '@/lib/providers'
import Header from './components/Header/Header'

/* Instruments */
import './styles/globals.css'

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <Header />
          <main>{props.children}</main>
        </body>
      </html>
    </Providers>
  )
}
