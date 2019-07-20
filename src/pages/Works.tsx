import React from "react"
import { Box, Typography, makeStyles } from "@material-ui/core"

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
    </Box>
  )
}
