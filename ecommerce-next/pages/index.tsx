import Play from "../playground"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    Play();
  }, [])

  return (

    <div>Hello World!</div>

  )
}