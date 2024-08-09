import { useEffect, useState } from 'react'
import { DataNode } from '../types'

export default function Data({ datum }: { datum: DataNode }) {
  const [datumText, setDataText] = useState('')

  const fetchData = async (url: string) => {
    const response = await fetch(url)

    if (response.status < 299) {
      const rawData = await response.text()
      if (rawData) {
        setDataText(rawData.substring(0, 500))
      }
    }
  }

  useEffect(() => {
    fetchData(datum.url)
  }, [datum.url])

  return (
    <div className="p-5 border-t border-neutral-800 mt-5">
      {datumText === '' && (
        <span>nothing to show yet!</span>
      )}

      {datumText !== '' && (
        <span>{datumText}</span>
      )}
    </div>
  )
}
