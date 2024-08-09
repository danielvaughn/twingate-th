import { useEffect, useState } from 'react'
import { DataNode } from '../types'

export default function Data({ datum }: { datum: DataNode }) {
  const [datumText, setDataText] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async (url: string) => {
    setIsLoading(true)

    const response = await fetch(url)

    if (response.status < 299) {
      const rawData = await response.text()
      if (rawData) {
        setDataText(rawData.substring(0, 500))
      }
    }

    setIsLoading(false)
  }

  useEffect(() => {
    fetchData(datum.url)
  }, [datum.url])

  return (
    <div className="p-5 border-t border-neutral-800 mt-5 flex gap-5">
      <div>
        <button
          type="button"
          className="px-2 py-1 bg-blue-500 text-white hover:cursor hover:bg-blue-800"
          onClick={() => {
            fetchData(datum.url)
          }}
        >
          refresh
        </button>
      </div>
      {isLoading && (
        <div>loading your data!</div>
      )}
      {!isLoading && (
        <div>
          {datumText === '' && (
            <span>nothing to show!</span>
          )}

          {datumText !== '' && (
            <span>{datumText}</span>
          )}
        </div>
      )}
    </div>
  )
}
