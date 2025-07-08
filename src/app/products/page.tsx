import React from 'react'
import Image from 'next/image'

import { NavTopBtn } from '../../components/buttons'
import { PageLayout } from '../../components/layout'
import { Section } from '../../components/section'
import { Box, Title } from '../../components/ui'
import { products } from '../../data/products'
import { FullScreen } from '../../components/ui'
import { NavBAr } from '../../components/navigation'
import { Button } from '../../components/buttons'

type Product = {
  title: string
  img: string
  desc: {
    features: string
    Scenario: string
  }
}

const Products: React.FC = () => {
  return (
    <>
      <NavBAr glass={true} />
      <FullScreen showVideo={true} overlay={true} noSnap={true} video="/assets/videos/kids.mp4">
        <div className="w-full h-full flex justify-center absolute top-[30%] md:top-[40%] uppercase font-helvetica">
          <div className="flex flex-col md:w-[45%] w-[70%] items-center text-center">
            <div className="relative">
              <Box size="w-[70%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              <h2 className="leading-[2.6rem] text-3xl mt-[-32px] z-30 relative font-avenir">
                Step into the Future of all Service Experience with Virtual Reality! Get Your VR Kit
                Now.
              </h2>
            </div>

            <p className="mt-4 bodyText text-[10px] w-[100%]">
              Experience seamless solutions designed to elevate your digital experience. Discover
              the future with us.
            </p>
            <Button text={`Purchase Now`} custom={`mt-5 px-6 py-2`} />
          </div>
        </div>
      </FullScreen>

      <PageLayout noNav={true}>
        <Section>
          <Title first={`Pro`} second={`duct`} height={`h-16`} />

          <NavTopBtn />

          {products.map((product: Product, index: number) => {
            const isOdd = index % 2 !== 0

            return (
              <div
                key={product.title}
                className={`flex ${
                  isOdd ? 'flex-col' : 'flex-col-reverse'
                } md:flex-row items-center mb-10 gap-5 md:gap-16 w-full md:w-2/3 mx-auto justify-between`}
              >
                {isOdd ? (
                  <>
                    {/* Image Left */}
                    <Image
                      src={product.img}
                      alt={product.title}
                      width={600}
                      height={350}
                      className="object-contain border"
                      priority
                    />
                    {/* Content Right */}
                    <div className="flex flex-col">
                      <h3 className="uppercase font-poppins opacity-100 mb-5">{product.title}</h3>
                      <p className="opacity-60 text-[12px] font-helvetica font-medium leading-[1.5rem]">{`Features: ${product.desc.features}`}</p>
                      <p className="opacity-60 text-[12px] font-helvetica font-medium leading-[1.5rem]">{`Scenario: ${product.desc.Scenario}`}</p>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Content Left */}
                    <div className="flex flex-col">
                      <h3 className="uppercase font-poppins opacity-100 mb-5">{product.title}</h3>
                      <p className="opacity-60 text-[12px] font-helvetica font-medium leading-[1.5rem]">{`Features: ${product.desc.features}`}</p>
                      <p className="opacity-60  text-[12px] font-helvetica font-medium leading-[1.5rem]">{`Scenario: ${product.desc.Scenario}`}</p>
                    </div>
                    {/* Image Right */}
                    <Image
                      src={product.img}
                      alt={product.title}
                      width={500}
                      height={350}
                      className="object-contain"
                      priority
                    />
                  </>
                )}
              </div>
            )
          })}
        </Section>
      </PageLayout>
    </>
  )
}

export default Products
