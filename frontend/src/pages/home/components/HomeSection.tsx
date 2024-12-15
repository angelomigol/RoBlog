import BlogComponent from "./BlogComponent"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"


const HomeSection = () => {
  return (
    <div className="space-y-4">
      <h1 className="md:text-3xl text-2xl font-bold">Home</h1>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-[95%]"
          >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="basis-[450px]">
                <BlogComponent />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
    </div>
  )
}

export default HomeSection