import { useState } from 'react'
import { CanvasNodeList } from '../types'
import Canvas from './Canvas'
import Editor from './Editor'

function App() {
  const [canvasData, setCanvasData] = useState<CanvasNodeList>([])

  return (
    <>
      <Editor
        onSave={(data: CanvasNodeList) => {
          setCanvasData(data)
        }}
      />
      <Canvas
        data={canvasData}
      />
    </>
  )
}

export default App
