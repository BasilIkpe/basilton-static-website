'use client'

import { useRouter } from 'next/navigation'
import { PageLayout } from '../../components/layout'
import { Section } from '../../components/section'
import { Title } from '../../components/ui'
import { Button } from '../../components/buttons'
import { terms } from '../../data/terms'
import { UnorderedList } from '../privacy/page'

interface TermItem {
  title: string
  info: string
  list?: string[]
  extraInfo?: string
}

interface TitleBodyProps {
  title: string
  body: string
}

const TitleBody: React.FC<TitleBodyProps> = ({ title, body }) => {
  return (
    <div className="mt-5">
      <h2 className="mb-2 capitalize">{title}</h2>
      <p className="body">{body}</p>
    </div>
  )
}

const Terms: React.FC = () => {
  const router = useRouter()

  const onClickHandler = () => {
    router.push('/enquiry')
  }

  return (
    <PageLayout>
      <Section>
        <Title first="Terms" second="Of service" height="h-16" />
        {terms.map((each: TermItem, index: number) => {
          const { title, info, list, extraInfo } = each
          return (
            <div key={index} className="text-justify">
              <TitleBody title={title} body={info} />
              {list && <UnorderedList arr={list} />}
              {extraInfo && <p>{extraInfo}</p>}
            </div>
          )
        })}

        <div>
          <Button
            onClickHandler={onClickHandler}
            text="Enquire Hub"
            custom="py-2 px-6 text-sm mt-5"
          />
        </div>
      </Section>
    </PageLayout>
  )
}

export default Terms
