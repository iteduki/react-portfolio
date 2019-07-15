import React from "react"

type HomeProps = {
  text?: string
}

export default function Home({ text = "Home" }: HomeProps) {
  return <p>{text}</p>
}
