import Image from 'next/image'
import { Header } from './components/Header'
import { ContentTimer } from './components/ContentTimer'

export default function Home() {
  return (
    <>
      <Header />
      <ContentTimer />
    </>
  )
}
