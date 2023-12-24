import Image from 'next/image'
import Header from './components/Header'
import ContentTimer from './components/ContentTimer'
import ContainerContent from './components/ContainerContent'

export default function Home() {
  return (
    <>
      <Header />
      <ContentTimer />
      <ContainerContent />
    </>
  )
}
