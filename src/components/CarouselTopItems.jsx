import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

function CarouselTopItems () {
  // State for Active index
  const [activeIndex, setActiveIndex] = React.useState(0)
  // State for Animation
  const [animating, setAnimating] = React.useState(false)
  const [carouselItems, setCarouselItems] = React.useState([])
  const { items } = useSelector(state => state.purchaseState)
  // Sample items for Carousel

  useEffect(() => {
    setCarouselItems(items)
  }, [carouselItems])

  return (
    <div class='container'>
      <Carousel>
        {carouselItems.map(item => {
          return (
            <Carousel.Item
              key={item.id}
              onExited={() => setAnimating(false)}
              onExiting={() => setAnimating(true)}
              style={{
                width: '92%',
                marginLeft: 55
              }}
            >
              <img
                src={item.image}
                style={{ height: 370, width: '100%' }}
                alt={item.altText}
              />
              <Carousel.Caption>
                <h3>{item.name}</h3>
                <p>Harga: {item.price}</p>
                <p>Terjual: {item.sold_unit}</p>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  )
}

export default CarouselTopItems
