import Image from 'next/image'
import Header from './components/Header'
import ContentTimer from './components/ContentTimer'
import ContainerContent from './components/ContainerContent'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <ContentTimer />
      <ContainerContent />
      <Footer />
    </>
  )
}
