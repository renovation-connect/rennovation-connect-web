import { CardCarousel } from "../ui/card-carousel"

export default function CardCaroursalComp() {
  const images = [
    { src: "/img/carrousel-worker-1.png", alt: "Image 1" },
    { src: "/img/carrousel-worker-2.png", alt: "Image 2" },
    { src: "/img/carrousel-worker-3.png", alt: "Image 3" },
  ]

  return (
    <div className="w-full">
      <CardCarousel
        images={images}
        autoplayDelay={2000}
        showPagination={true}
        showNavigation={true}
      />
    </div>
  )
}
