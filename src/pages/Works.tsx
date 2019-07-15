import React from "react"

type WorksProps = {
  text?: string
}

export default function Works({ text = "Works" }: WorksProps) {
  return <p>{text}</p>
}
