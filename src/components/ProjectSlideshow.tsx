import { useEffect, useState } from 'react'

type ProjectSlideshowProps = {
  images: readonly string[]
  alt: string
}

export default function ProjectSlideshow({ images, alt }: ProjectSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (images.length < 2) return

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % images.length)
    }, 3200)

    return () => window.clearInterval(interval)
  }, [images.length])

  return (
    <figure className="mg-project-slideshow">
      {images.map((image, index) => (
        <img
          key={image}
          className={index === activeIndex ? 'is-active' : ''}
          src={image}
          alt={index === activeIndex ? alt : ''}
          loading={index === 0 ? 'eager' : 'lazy'}
          aria-hidden={index === activeIndex ? undefined : true}
        />
      ))}
    </figure>
  )
}