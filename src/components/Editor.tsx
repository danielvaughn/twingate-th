import { ChangeEvent, KeyboardEvent, useState } from 'react'
import { CanvasNodeList } from '../types'
import { parseCanvasNodeList } from '../utils/parser'

export default function Editor({ onSave }: { onSave: (data: CanvasNodeList) => void }) {
  const [jsonText, setJsonText] = useState('')
  const [errorText, setErrorText] = useState('')
  const [hasSavedChanges, setHasSavedChanges] = useState(false)

  return (
    <section className="h-full w-1/2 bg-neutral-300 flex flex-col relative border-r border-neutral-800">
      <pre>
        <textarea
          className="w-full h-screen resize-none bg-transparent p-5 pt-12"
          value={jsonText}
          spellCheck={false}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            setJsonText(e.target.value)
            setErrorText('')
            setHasSavedChanges(true)
          }}
          onKeyDown={(e: KeyboardEvent<HTMLTextAreaElement>) => {
            if (e.metaKey && e.code === 'KeyS') {
              e.preventDefault()

              try {
                const jsonData = parseCanvasNodeList(jsonText)
                console.log('data')
                console.log(jsonData)
                onSave(jsonData)
              } catch (error) {
                console.warn(error)
                setErrorText('Sorry, you did not enter valid JSON. Please try again.')
              } finally {
                setHasSavedChanges(false)
              }
            }
          }}
        />
      </pre>
      <span className="absolute z-10 top-3 left-5 right-5 text-xs text-neutral-600">Press "cmd + s" to save and refresh</span>
      {errorText !== '' && (
        <div className="absolute bottom-0 left-0 right-0 bg-red-500 text-white p-5">
          {errorText}
        </div>
      )}
      {hasSavedChanges && (
        <mark
          className="bg-blue-500 absolute top-0 left-0 right-0 h-1 z-20"
        />
      )}
    </section>
  )
}
