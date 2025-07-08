import Image from 'next/image'

interface TestimonialCardProps {
  image: string
  name: string
  text: string
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ image, name, text }) => {
  return (
    <div className="w-64 h-[23rem] flex flex-col items-center mx-10">
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="h-44 w-full rounded-md relative"
      >
        <div className="glass w-[90%] absolute left-1/2 transform -translate-x-1/2 bottom-2 mx-auto text-center rounded-md uppercase py-1">
          <p className="text-[10px] font-avenir">{name}</p>
        </div>
      </div>

      <div>
        <Image
          src="/assets/images/testimonial/star.png"
          alt="Star rating"
          className="h-6 my-3"
          width={120}
          height={30}
          priority
        />
      </div>

      <p className="text-center uppercase text-[11px] w-[90%] leading-6 font-helvetica">{text}</p>
    </div>
  )
}

export default TestimonialCard
