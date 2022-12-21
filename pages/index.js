import { Container } from "../components/Global/Container"
import Footer from "../components/Global/Footer"
import PageTitle from "../components/Global/PageTitle"
import Hero from "../components/Home/Hero"
import Info from "../components/Home/Info"
import Logos from "../components/Home/Logos"
import { PageProvider } from "./context/pagesContext"

const Index = () => {
  return (
    <PageProvider>
      <Container>
        <PageTitle
          title="Inicio"
          name="Inicio"
          content="Inicio aplicación"
        />
        <Hero />
        <Info />
        <Logos />
        <Footer/>
      </Container>
    </PageProvider>
  )
}

export default Index