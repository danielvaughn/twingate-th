import { HeroImageNode } from '../types'

export default function HeroImage({ datum }: { datum: HeroImageNode }) {
  return (
    <div className="border-t border-neutral-800 mt-5">
      <img alt="hero image" src={datum.imageURI} className="w-full h-auto" />
    </div>
  )
}
