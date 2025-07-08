'use client'

import { PageLayout } from '../../components/layout'
import { Title } from '../../components/ui'
import { Section } from '../../components/section'
import { useRouter } from 'next/navigation'

import {
  eu,
  legal,
  personal,
  gdpr,
  personalDataUsage,
  sources,
  businessPurpose,
  category,
  ndpa,
  consumerRight,
  request,
  noResponse,
  links,
} from '../../data/privacy'
import { Button } from '../../components/buttons'

import { ReactNode } from 'react'

interface ContentProps {
  title: string
  children: ReactNode
}

const Content: React.FC<ContentProps> = ({ title, children }) => {
  return (
    <div>
      <h3 className="text-sm my-2">{title}</h3>
      {children}
    </div>
  )
}

interface TextProps {
  children: ReactNode
}

const Text: React.FC<TextProps> = ({ children }) => {
  return <p className="leading-7 my-2 text-justify body">{children}</p>
}

interface MakeBoldProps {
  children: ReactNode
}

const MakeBold: React.FC<MakeBoldProps> = ({ children }) => {
  return <strong>{children}</strong>
}

interface BoldTitleTextProps {
  title?: string
  content?: string
}

const BoldTitleText: React.FC<BoldTitleTextProps> = ({ title, content }) => {
  return (
    <Text>
      <MakeBold>{title}</MakeBold> {content}
    </Text>
  )
}

interface ContentContainerProps {
  children: ReactNode
}

const ContentContainer: React.FC<ContentContainerProps> = ({ children }) => {
  return <div className="my-2">{children}</div>
}

interface UnorderedListProps {
  arr: string[]
}

export const UnorderedList: React.FC<UnorderedListProps> = ({ arr }) => {
  return (
    <ul className="list-disc my-2 list-inside text-justify body">
      {arr.map((each, index) => (
        <li key={index} className="py-1">
          <p className="inline">{each}</p>
        </li>
      ))}
    </ul>
  )
}

const Privacy = () => {
  const router = useRouter()

  const onClickHandler = () => {
    router.push('/enquiry')
  }

  return (
    <PageLayout>
      <Section>
        <Title first={`Privacy`} second={`and policy`} height={`h-16`} />
        <section className="font-poppins mt-4">
          <h2>Interpretation and Definition</h2>
          <Content title={`Interpretation and Definition`}>
            <Text>
              The words of which the initial letter is capitalized have meanings defined under the
              following conditions. The following definitions shall have the same meaning regardless
              of whether they appear in singular or in plural.
            </Text>
          </Content>

          <Content title={`Definition`}>
            <Text>
              <MakeBold>For the purposes of this Privacy Policy:</MakeBold>
            </Text>

            <BoldTitleText
              title={`Account`}
              content={`means a unique account created for
              You to access our Service or parts of our Service.`}
            />

            <BoldTitleText
              title={`Affiliate`}
              content={`means an entity that controls, is
              controlled by or is under common control with a party, where
              “control” means ownership of 50% or more of the shares, equity
              interest or other securities entitled to vote for election of
              directors or other managing authority.`}
            />

            <BoldTitleText
              title={`Application`}
              content={` means the software program provided by the Company downloaded by You on any electronic device, named Basilton`}
            />

            <BoldTitleText
              title={`Business,`}
              content={`for the purpose of the NDPA (Nigeria Data Protection Act), refers to the Company as the legal entity that collects Consumers’ personal information and determines the purposes and means of the processing of Consumers’ personal information, or on behalf of which such information is collected and that alone, or jointly with others, determines the purposes and means of the processing of consumers’ personal information, that does business in the State of Nigeria.`}
            />

            <BoldTitleText
              title={`Company`}
              content={`(referred to as either “the Company”, “We”, “Us” or “Our” in this Agreement) refers to Basilton Solutions Limited, 13 Daniel Makinde Street, Ikosi, Ketu, Lagos Nigeria.`}
            />

            <BoldTitleText title={`In terms of the GDPR, the Company is the Data Controller.`} />

            <BoldTitleText
              title={`Consumer`}
              content={`for the purpose of the NDPA (Nigeria Data Protection Act), means a natural person who is a Nigeria resident. A resident, as defined in the law, includes (1) every individual who is in Nigeria for other than a temporary or transitory purpose, and (2) every individual who is domiciled in Nigeria who is outside Nigeria for a temporary or transitory purpose.`}
            />

            <BoldTitleText title={`Country refers to: Nigeria `} />

            <Text>
              Device means any device that can access the Service such as a computer, a cellphone or
              a digital tablet.
            </Text>

            <BoldTitleText
              title={`Do Not Track (DNT)`}
              content={`is a concept that has been promoted by US regulatory authorities, in particular the U.S. Federal Trade Commission (FTC), for the Internet industry to develop and implement a mechanism for allowing internet users to control the tracking of their online activities across websites.`}
            />

            <BoldTitleText
              title={`Facebook Fan Page`}
              content={`is a public profile named Basilton specifically created by the Company on the Facebook social network, accessible from https://www.facebook.com/basilton`}
            />

            <BoldTitleText
              title={`GDPR`}
              content={`means REGULATION (EU) 2016/679 OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL of 27 April 2016, on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation`}
            />

            <BoldTitleText
              title={`Personal Data`}
              content={`is any information that relates to an identified or identifiable individual.`}
            />

            <BoldTitleText
              content={`In terms of GDPR, Personal Data means any information relating to You such as a name, an identification number, location data, online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity.`}
            />

            <BoldTitleText
              content={`For the purposes of the CCPA, Personal Data means any information that identifies, relates to, describes or is capable of being associated with, or could reasonably be linked, directly or indirectly, with You.`}
            />

            <BoldTitleText
              title={`Sale,`}
              content={`for the purpose of the CCPA (California Consumer Privacy Act), means selling, renting, releasing, disclosing, disseminating, making available, transferring, or otherwise communicating orally, in writing, or by electronic or other means, a Consumer’s personal information to another business or a third party for monetary or other valuable consideration.`}
            />

            <BoldTitleText title={`Service`} content={`refers to the Application.`} />

            <BoldTitleText
              title={`Service Provider`}
              content={`means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used. In terms of the GDPR, Service Providers are considered Data Processors.`}
            />

            <BoldTitleText
              title={`Third-party Social Media`}
              content={`Service refers to any website or any social network website through which a User can log in or create an account to use the Service.`}
            />

            <BoldTitleText
              title={`Usage Data`}
              content={`refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).`}
            />

            <BoldTitleText
              content={`You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.`}
            />

            <Text>
              In terms of the GDPR, You can be referred to as the Data Subject or as the User as you
              are the individual using the Service.
              <br />
              Collecting and Using Your Personal Data
              <br />
              Types of Data Collected
              <br />
              Personal Data
              <br />
              While using Our Service, We may ask You to provide Us with certain personally
              identifiable information that can be used to contact or identify You. Personally
              identifiable information may include, but is not limited to:
              <br />
              Email Address
              <br />
              First name and last name
              <br />
              Usage Data
              <br />
              Usage Data is Collected automatically when using the services, so to enable us to
              provide you to requested services.
            </Text>
            <Text>
              When You access the Service by or through a mobile device, We may collect certain
              information automatically, including, but not limited to, the type of mobile device
              You use, Your mobile device unique ID, the IP address of Your mobile device, Your
              mobile operating system, the type of mobile Internet browser You use, unique device
              identifiers and other diagnostic data.
              <br />
              We may also collect information that Your browser sends whenever You visit our Service
              or when You access the Service by or through a mobile device. However, please note
              that, in any case, the Usage Data We collect are adequate, relevant, and limited to
              what is necessary in relation to the provision of the Service and thus in accordance
              with “data minimization” principle.
            </Text>

            <div>
              <Text>
                Use of Your Personal Data
                <br />
                The Company may use Personal Data for the following purposes:
              </Text>
              <UnorderedList arr={personalDataUsage} />
            </div>

            <div>
              <Text>We may share Your personal information in the following situations:</Text>
              <UnorderedList arr={personal} />
            </div>

            <Text>
              The Company will retain Your Personal Data only for as long as is necessary for the
              purposes set out in this Privacy Policy. We will retain and use Your Personal Data to
              the extent necessary to comply with our legal obligations (for example, if we are
              required to retain your data to comply with applicable laws), resolve disputes, and
              enforce our legal agreements and policies.
              <br />
              The Company will also retain Usage Data for internal analysis purposes. Usage Data is
              generally retained for a shorter period of time, except when this data is used to
              strengthen the security or to improve the functionality of Our Service, or We are
              legally obligated to retain this data for longer time periods.
              <br />
              Transfer of Your Personal Data The Company’s servers are located in United States and
              Germany. If You are accessing the Application from outside the United States or
              Germany, please be aware that Your information may be transferred to, stored, and
              processed by The Company in our facilities and by those third parties with whom we may
              share Your personal information, in the United States, Germany, Canada and other
              countries. If You are a resident in the European Economic Area, then these countries
              may not have data protection or other laws as comprehensive as those in Your country.
              We will however take all steps reasonably necessary to ensure that Your Personal Data
              is treated securely and in accordance with this Privacy Policy and no transfer of Your
              Personal Data will take place to an organization or a country unless there are
              adequate controls in place including the security of Your data and other personal
              information.
              <br />
              EU-U.S. Standard Contractual Clauses In particular, to ensure the same level of
              protection when transferring Personal Data to countries outside the European Economic
              Area, the Company complies with the EU-U.S. Standard Contractual Clauses (SCCs) as set
              forth by the U.S. Department of Commerce regarding the collection, use, and retention
              of personal information transferred from the European Union to the United States. As
              such, the Company is committed to subjecting all personal information received from
              European Union (EU) member countries, in reliance on the SCCs, to the Framework’s
              applicable Principles. To learn more about the SCCs, visit the European Commission’s
              website.
              <br />
              Depending on your location, your data is physically stored either in Frankfurt,
              Germany, or North Virginia, United States of America. For European Accounts, this
              means the data resides and remains in Europe at all times. The Company is responsible
              for the processing of personal information it receives, under the SCCs, and
              subsequently transfers to a third party acting as an agent on its behalf.
              <br />
              With respect to personal information received or transferred pursuant to SCCs, The
              Company is subject to the regulatory enforcement powers of the U.S. FTC. In certain
              situations, we may be required to disclose personal information in response to lawful
              requests by public authorities, including to meet national security or law enforcement
              requirements.
              <br />
              Disclosure of Your Personal Data
              <br />
              Business Transactions
              <br />
              If the Company is involved in a merger, acquisition or asset sale, Your Personal Data
              may be transferred. We will provide notice before Your Personal Data is transferred
              and becomes subject to a different Privacy Policy.
              <br />
              Law enforcement
              <br />
              Under certain circumstances, the Company may be required to disclose Your Personal
              Data if required to do so by law or in response to valid requests by public
              authorities (e.g. a court or a government agency).
              <br />
              Other legal requirements
            </Text>

            <ContentContainer>
              <Text>
                The Company may disclose Your Personal Data in the good faith belief that such
                action is necessary to:
              </Text>
              <UnorderedList arr={legal} />
            </ContentContainer>

            <ContentContainer>
              <Text>
                <MakeBold>Facebook</MakeBold>
              </Text>
              <Text>
                Facebook Facebook retargeting service is provided by Facebook Inc.
                <br />
                You can learn more about interest-based advertising from Facebook by visiting this
                page: https://www.facebook.com/help/516147308587266
                <br />
                To opt-out from Facebook’s interest-based ads, follow these instructions from
                Facebook: https://www.facebook.com/help/568137493302217
                <br />
                Facebook adheres to the Self-Regulatory Principles for Online Behavioural
                Advertising established by the Digital Advertising Alliance. You can also opt-out
                from Facebook and other participating companies through the Digital Advertising
                Alliance in the USA http://www.aboutads.info/choices/, the Digital Advertising
                Alliance of Canada in Canada http://youradchoices.ca/ or the European Interactive
                Digital Advertising Alliance in Europe http://www.youronlinechoices.eu/, or opt-out
                using your mobile device settings.
                <br />
                For more information on the privacy practices of Facebook, please visit Facebook’s
                Data Policy: https://www.facebook.com/privacy/explanation
                <br />
                Usage, Performance and Miscellaneous
                <br />
                We may use third-party Service Providers to provide better improvement of our
                Service
              </Text>
            </ContentContainer>

            <ContentContainer>
              <Text>
                <MakeBold>GDPR Privacy</MakeBold>
              </Text>
              <Text>
                Legal Basis for Processing Personal Data under GDPR
                <br />
                We may process Personal Data under the following conditions:
              </Text>
              <UnorderedList arr={gdpr} />
            </ContentContainer>

            <ContentContainer>
              <Text>
                In any case, the Company will gladly help to clarify the specific legal basis that
                applies to the processing, and in particular whether the provision of Personal Data
                is a statutory or contractual requirement, or a requirement necessary to enter into
                a contract.
                <br />
                Your Rights under the GDPR
                <br />
                The Company undertakes to respect the confidentiality of Your Personal Data and to
                guarantee You can exercise Your rights under the GDPR.
                <br />
                You have the right under this Privacy Policy, and by law if You are within the EU,
                to:
              </Text>
              <UnorderedList arr={eu} />
            </ContentContainer>

            <Text>
              Exercising of Your GDPR Data Protection Rights
              <br />
              You may exercise Your rights of access, rectification, cancellation and opposition by
              contacting Us. Please note that we may ask You to verify Your identity before
              responding to such requests. If You make a request, We will try our best to respond to
              You as soon as possible.
              <br />
              You have also the right to complain to a Data Protection Authority about Our
              collection and use of Your Personal Data. For more information, if You are in the
              European Economic Area (EEA), please contact Your local data protection authority in
              the country of your residence.
              <br />
              Facebook Fan Page
              <br />
              Data Controller for the Facebook Fan Page
              <br />
              The Company is the Data Controller of Your Personal Data collected while using the
              Service. As operator of the Facebook Fan Page https://www.facebook.com/basilton, the
              Company and the operator of the social network Facebook are Joint Controllers.
              <br />
              The Company has entered into agreements with Facebook that define the terms for use of
              the Facebook Fan Page, among other things. These terms are mostly based on the
              Facebook Terms of Service: https://www.facebook.com/terms.php
              <br />
              Visit the Facebook Privacy Policy https://www.facebook.com/policy.php for more
              information about how Facebook manages Personal data or contact Facebook online, or by
              mail: Facebook, Inc. ATTN, Privacy Operations, 1601 Willow Road, Menlo Park, CA 94025,
              United States.
              <br />
              Facebook Insights
              <br />
              We use the Facebook Insights function in connection with the operation of the Facebook
              Fan Page and on the basis of the GDPR, in order to obtain anonymized statistical data
              about Our users.
              <br />
              For this purpose, Facebook places a Cookie on the device of the user visiting Our
              Facebook Fan Page. Each Cookie contains a unique identifier code and remains active
              for a period of two years, except when it is deleted before the end of this period.
              <br />
              Facebook receives, records and processes the information stored in the Cookie,
              especially when the user visits the Facebook services, services that are provided by
              other members of the Facebook Fan Page and services by other companies that use
              Facebook services.
              <br />
              For more information on the privacy practices of Facebook, please visit Facebook
              Privacy Policy here: https://www.facebook.com/full_data_use_policy
            </Text>

            <ContentContainer>
              <Text>
                Sources of Personal Information
                <br />
                We obtain the categories of personal information listed above from the following
                categories of sources:
              </Text>
              <UnorderedList arr={sources} />
              <Text>
                Use of Personal Information for Business Purposes or Commercial Purposes for those
                in the state of California
                <br />
                We may use or disclose personal information We collect for “business purposes” or
                “commercial purposes” (as defined under the CCPA), which may include the following
                examples:
              </Text>

              <UnorderedList arr={businessPurpose} />

              <Text>
                Please note that the examples provided above are illustrative and not intended to be
                exhaustive. For more details on how we use this information, please refer to the
                “Use of Your Personal Data” section.
                <br />
                If We decide to collect additional categories of personal information or use the
                personal information We collected for materially different, unrelated, or
                incompatible purposes We will update this Privacy Policy.
                <br />
                Disclosure of Personal Information for Business Purposes or Commercial Purposes
                <br />
                We may use or disclose and may have used or disclosed in the last twelve (12) months
                the following categories of personal information for business or commercial
                purposes:
              </Text>

              <UnorderedList arr={category} />

              <Text>
                Please note that the categories listed above are those defined in the CCPA. This
                does not mean that all examples of that category of personal information were in
                fact disclosed but reflects our good faith belief to the best of our knowledge that
                some of that information from the applicable category may be and may have been
                disclosed.
                <br />
                When We disclose personal information for a business purpose or a commercial
                purpose, We enter a contract that describes the purpose and requires the recipient
                to both keep that personal information confidential and not use it for any purpose
                except performing the contract.
                <br />
                Sharing of Personal Information
                <br />
                We may share Your personal information identified in the above categories with the
                following categories of third parties:
              </Text>
              <UnorderedList
                arr={[
                  'Service Providers',
                  'Payment Processors',
                  'Our affiliates',
                  'Our business partners',
                  'Third party vendors to whom You or Your agents authorize Us to disclose Your personal information in connection with products or services We provide to You',
                ]}
              />
              <Text>
                Sale of Personal Information of Minors Under 16 Years of Age
                <br />
                We do not knowingly collect personal information from minors under the age of 16
                through our Service, although certain third party websites that we link to may do
                so. These third-party websites have their own terms of use and privacy policies and
                we encourage parents and legal guardians to monitor their children’s Internet usage
                and instruct their children to never provide information on other websites without
                their permission.
                <br />
                We do not sell the personal information of Consumers We actually know are less than
                16 years of age, unless We receive affirmative authorization (the “right to opt-in”)
                from either the Consumer who is between 13 and 16 years of age, or the parent or
                guardian of a Consumer less than 13 years of age. Consumers who opt-in to the sale
                of personal information may opt-out of future sales at any time. To exercise the
                right to opt-out, You (or Your authorized representative) may submit a request to Us
                by contacting Us.
                <br />
                If You have reason to believe that a child under the age of 13 (or 16) has provided
                Us with personal information, please contact Us with sufficient detail to enable Us
                to delete that information.
                <br />
                Your Rights under the NDPA
                <br />
                The NDPA provides Nigerian residents with specific rights regarding their personal
                information. If You are a resident of Nigeria, You have the following rights:
              </Text>
              <UnorderedList arr={ndpa} />
              <Text>
                The right not to be discriminated against.You have the right not to be discriminated
                against for exercising any of Your consumer’s rights, including by:
              </Text>
              <UnorderedList arr={consumerRight} />
              <Text>
                In order to exercise any of Your rights under the NDPA, and if You are a Nigerian
                resident, You can contact Us:
              </Text>
            </ContentContainer>

            <ContentContainer>
              <Text>
                By email: hello@basilton.com
                <br />
                By visiting this page on our website: https://basilton.com/faq
                <br />
                Only You, or a person registered with the Nigeria or diaspora of State that You
                authorize to act on Your behalf, may make a verifiable request related to Your
                personal information.
                <br />
                Your request to Us must:
              </Text>
              <UnorderedList arr={request} />
              <Text>
                We cannot respond to Your request or provide You with the required information if we
                cannot:
              </Text>
              <UnorderedList arr={noResponse} />
              <Text>
                We will disclose and deliver the required information free of charge within 45 days
                of receiving Your verifiable request. The time period to provide the required
                information may be extended once by an additional 45 days when reasonable necessary
                and with prior notice.
                <br />
                Any disclosures We provide will only cover the 12-month period preceding the
                verifiable request’s receipt.
                <br />
                For data portability requests, We will select a format to provide Your personal
                information that is readily useable and should allow You to transmit the information
                from one entity to another entity without hindrance.
                <br />
                Do Not Sell My Personal Information
                <br />
                You have the right to opt-out of the sale of Your personal information. Once We
                receive and confirm a verifiable consumer request from You, we will stop selling
                Your personal information. To exercise Your right to opt-out, please contact Us.
                <br />
                The Service Providers we partner with (for example, our analytics or advertising
                partners) may use technology on the Service that sells personal information as
                defined by the NDPA law. If you wish to opt out of the use of Your personal
                information for interest-based advertising purposes and these potential sales as
                defined under NDPA law, you may do so by following the instructions below.
                <br />
                Please note that any opt out is specific to the browser You use. You may need to opt
                out on every browser that You use.
                <br />
                Website
                <br />
                You can opt out of receiving ads that are personalized as served by our Service
                Providers by following our instructions presented on the Service:
              </Text>
              <UnorderedList arr={links} />
              <Text>
                The opt out will place a cookie on Your computer that is unique to the browser You
                use to opt out. If you change browsers or delete the cookies saved by your browser,
                You will need to opt out again.
                <br />
                Contact Us
                <br />
                If you have any questions about this Privacy Policy, You can contact us:
                <br />
                By email: hello@basilton.com
                <br />
                by
                <br />
                post:
                <br />
                Basilton Solutions inc.
                <br />
                13 Daniel Makinde street, ikosi, ketu
                <br />
                Lagos,
                <br />
                Nigeria
                <br />
                By visiting this page on our website: https://basilton.com/faq
              </Text>
            </ContentContainer>
          </Content>
          <Button
            onClickHandler={onClickHandler}
            text={`Enquire Hub`}
            custom={`py-2 px-6 text-sm mt-4`}
          />
        </section>
      </Section>
    </PageLayout>
  )
}
export default Privacy
