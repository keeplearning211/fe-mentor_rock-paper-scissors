/* Components */
import { Providers } from '@/lib/providers'
import Header from './components/Header/Header'
import RuleModalBtn from './components/RuleModal/RuleModalBtn'

/* Instruments */
import './styles/globals.css'

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <Header />
          <main>
            {props.children}
            <RuleModalBtn />
          </main>
        </body>
      </html>
    </Providers>
  )
}
