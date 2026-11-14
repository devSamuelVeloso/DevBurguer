import { useEffect, useState } from 'react'
import { api } from '../../services/api.js'
import CarouselModule from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import { Container, Title, ContainerItems } from './styles.js'

const Carousel = CarouselModule.default

function CategoriesCarousel() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories')

      setCategories(data.categories)
    }
    loadCategories()

  }, [])

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1280, min: 690 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 690, min: 0 },
      items: 2,
    },
  }

  return (
    <Container>
      <Title>Categorias</Title>
      <Carousel responsive={responsive}
        infinite={true}
        arrows={true}
        itemClass="carousel-item"
        partialVisible={false}>
        {categories.map((category) => (
          <ContainerItems key={category.id} imageUrl={category.url}>
            <p>{category.name}</p>
          </ContainerItems>
        ))}
      </Carousel>
    </Container>
  )
}


export default CategoriesCarousel