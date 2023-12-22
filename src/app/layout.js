import { Archivo } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
  weight: ['400', '700'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Codelanida - Desafio 16',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={archivo.className}>{children}</body>
    </html>
  )
}
