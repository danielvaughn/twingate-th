import { CanvasNodeList } from "../types";

export function parseCanvasNodeList(jsonText: string) {
  const jsonData: CanvasNodeList = JSON.parse(jsonText)

  return jsonData.map((datum) => {
    if (datum.type === 'image-text') {
      return {
        ...datum,
        title: datum.title || '',
        leftToRight: datum.leftToRight === undefined ? true : datum.leftToRight,
      }
    }

    return datum
  })
}
