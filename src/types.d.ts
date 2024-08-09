
export type CanvasNodeList = (HeroImageNode | ImageTextNode | DataNode)[]

export interface HeroImageNode {
  type: "hero"
  imageURI: string
}

export interface ImageTextNode {
  type: "image-text"
  imageURI: string
  text: string
  title?: string
  leftToRight?: boolean
}

export interface DataNode {
  type: "data"
  url: string
}
