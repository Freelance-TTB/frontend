import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap'
import { useEffect } from 'react'

function CarouselTopItems () {
  // State for Active index
  const [activeIndex, setActiveIndex] = React.useState(0)

  // State for Animation
  const [animating, setAnimating] = React.useState(false)
  const [carouselItems, setCarouselItems] = React.useState([])
  // Sample items for Carousel

  useEffect(() => {
    const topItems = [
      {
        id: 1,
        img:
          'https://i0.wp.com/esportsnesia.com/wp-content/uploads/2021/07/Claude-Cover-696x464.jpg',
        first_label: 5000
      },
      {
        id: 2,
        img:
          'https://cdn.oneesports.gg/cdn-data/sites/2/2021/09/MLBB_BlitzAttackBeatrix.jpg',
        first_label: 5000
      },
      {
        id: 3,
        img:
          'https://gamefinity.id/wp-content/uploads/2021/10/Mobile-Legends-Brody.jpg',
        first_label: 5000
      }
    ]

    setCarouselItems(topItems)
  }, [])
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
  const itemLength = carouselItems.length - 1

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

  return (
    <div>
      <Carousel>
        {carouselItems.map(item => {
          return (
            <Carousel.Item
              key={item.if}
              onExited={() => setAnimating(false)}
              onExiting={() => setAnimating(true)}
            >
              <img
                src={item.img}
                style={{ height: '500px', width: '100%' }}
                alt={item.altText}
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  )
}

export default CarouselTopItems
