import { ImageTextNode } from '../types'

export default function ImageText({ datum }: { datum: ImageTextNode }) {
  const textNode = <p className="flex-grow p-5">{datum.text}</p>
  const imgNode = <img alt="image text image" src={datum.imageURI} />

  return (
    <div className="flex p-5 border-t border-neutral-800 mt-5">
      {datum.leftToRight && (
        <>
          {imgNode}
          {textNode}
        </>
      )}
      {!datum.leftToRight && (
        <>
          {textNode}
          {imgNode}
        </>
      )}
    </div>
  )
}
