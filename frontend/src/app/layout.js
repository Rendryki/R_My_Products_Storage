import { Providers } from "./provider";
export const metadata = {
  title: 'Teste Task',
  description: 'Teste para estágio Task',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
