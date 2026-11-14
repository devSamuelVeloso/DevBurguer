import CategoriesCarousel from '../../components/Categories Carousel/index.jsx'
import { Banner, Container, Content } from './styles.js'

function Home() {

    return (
        <main>
            <Banner>
                <h1>Bem-vindo(a)</h1>
            </Banner>
            <Container>
                <Content>
                    <CategoriesCarousel />
                </Content>
            </Container>
        </main>
    )
}

export default Home