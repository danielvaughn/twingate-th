import { ImageTextNode } from '../types'

export default function ImageText({ datum }: { datum: ImageTextNode }) {
  const textNode = (
    <div className="flex-grow p-5">
      {datum.title !== '' && (
        <h2 className="mb-1">{datum.title}</h2>
      )}
      <p>{datum.text}</p>
    </div>
  )
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
