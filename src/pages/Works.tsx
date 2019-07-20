import React from "react"
import { Box, Typography, makeStyles } from "@material-ui/core"
import contents from "./WorksComponent/contents.json"

type Contents = {
  title: string
  tools: string
  description: string
  href?: string
}

const useStyles = makeStyles({
  works: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 20
  }
})

export default function Works() {
  const classes = useStyles()
  return (
    <Box className={classes.works}>
      <Typography variant="h1">Works</Typography>
      <Box style={{ display: "flex" }}>
        {contents.map((item: Contents, key) => {
          return <Typography>{item.title}</Typography>
        })}
      </Box>
    </Box>
  )
}
