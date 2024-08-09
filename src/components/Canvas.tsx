import { CanvasNodeList } from '../types'
import Data from './Data'
import HeroImage from './HeroImage'
import ImageText from './ImageText'

export default function Canvas({ data }: { data: CanvasNodeList }) {
  return (
    <section className="h-full w-1/2 overflow-x-hidden">
      {data.map((datum, index) => {
        if (datum.type === 'data') {
          return (
            <Data datum={datum} key={`${datum.type}_${index}`} />
          )
        }

        if (datum.type === 'hero') {
          return (
            <HeroImage datum={datum} key={`${datum.type}_${index}`} />
          )
        }

        if (datum.type === 'image-text') {
          return (
            <ImageText datum={datum} key={`${datum.type}_${index}`} />
          )
        }

        return null
      })}
    </section>
  )
}
