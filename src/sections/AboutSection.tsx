import { CallToAction, FullScreen, SectionContainer } from '../components/ui'
import { Title } from '../components/ui'
import AboutSlider from '../utils/AboutSlider'

const AboutSection = () => {
  return (
    <FullScreen id={2}>
      {/* <NavBAr glass={true} /> */}
      <SectionContainer indicator={true} number={2}>
        <div className="absolute inset-0 flex flex-col items-center md:justify-center">
          <div className="w-full md:w-[75%]">
            <div className="flex flex-col md:flex-row items-start gap-7 md:gap-14 mb-6">
              <Title sub="recent work" first="who" second="we are" height="h-20" width="w-20" />

              <div className="md:w-[60%]">
                <p className="bodyText text-justify relative">
                  we are dedicated team committed to enhancing your church experience, grow your
                  user by using data. Our comprehensive church application offers a variety of
                  modules and features designed to enrich your church’s spiritual journey and
                  connect all its members to their faith community using technology
                  <span className="absolute h-12 w-[40%] -z-10 bg-custard-yellow -left-3 top-10"></span>
                </p>
              </div>
            </div>

            <div className="w-[80vw] md:w-[80vh] mx-auto mt-10 md:mt-0">
              <AboutSlider />
            </div>

            <div className="mx-auto grid place-content-center">
              <CallToAction />
            </div>
          </div>
        </div>
      </SectionContainer>
    </FullScreen>
  )
}
export default AboutSection
