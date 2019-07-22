import React from "react"
import { Box, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
  resume: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 20
  }
})

export default function Resume() {
  const classes = useStyles()
  return (
    <Box className={classes.resume}>
      <Typography variant="h2">Resume</Typography>
    </Box>
  )
}
