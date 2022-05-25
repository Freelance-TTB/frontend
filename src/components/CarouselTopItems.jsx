import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap'

function CarouselTopItems () {
  // State for Active index
  const [activeIndex, setActiveIndex] = React.useState(0)

  // State for Animation
  const [animating, setAnimating] = React.useState(false)

  // Sample items for Carousel
  const items = [
    {
      src:
        'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190603152813/ml_gaming.png'
    },
    {
      src:
        'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190528184201/gateexam.png'
    }
  ]

  // Items array length
  const itemLength = items.length - 1

  // Previous button for Carousel
  const previousButton = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? itemLength : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  // Next button for Carousel
  const nextButton = () => {
    if (animating) return
    const nextIndex = activeIndex === itemLength ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  // Carousel Item Data
  //   const carouselItemData = items.map(item => {
  //     return (
  //       <CarouselItem
  //         key={item.src}
  //         onExited={() => setAnimating(false)}
  //         onExiting={() => setAnimating(true)}
  //       >
  //         <img src={item.src} alt={item.altText} />
  //       </CarouselItem>
  //     )
  //   })

  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className='d-block w-100'
            src='https://i0.wp.com/esportsnesia.com/wp-content/uploads/2021/07/Claude-Cover-696x464.jpg'
            alt='First slide'
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className='d-block w-100'
            src='https://cdn.oneesports.gg/cdn-data/sites/2/2021/09/MLBB_BlitzAttackBeatrix.jpg'
            alt='Second slide'
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://gamefinity.id/wp-content/uploads/2021/10/Mobile-Legends-Brody.jpg'
            alt='Third slide'
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default CarouselTopItems
