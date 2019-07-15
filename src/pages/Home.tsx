import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box } from "@material-ui/core"
import icon from "../assets/icon.jpg"

const useStyles = makeStyles({
  profile: {
    flexGrow: 2
  },
  biography: {
    flexGrow: 3
  }
})

type HomeProps = {
  text?: string
}

export default function Home({ text = "Home" }: HomeProps) {
  const classes = useStyles()
  return (
    <>
      <Box display="flex" padding={1} bgcolor="background.paper">
        <Box padding={1} flexGrow={2} bgcolor="grey.300">
          <img src={icon} />
        </Box>
        <Box padding={1} flexGrow={3} bgcolor="grey.300">
          Item 2
        </Box>
      </Box>
    </>
  )
}
