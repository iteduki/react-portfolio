import React from "react"

type ResumeProps = {
  text?: string
}

export default function Resume({ text = "Resume" }: ResumeProps) {
  return <p>{text}</p>
}
