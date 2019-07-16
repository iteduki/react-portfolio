import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box } from "@material-ui/core"

const useStyles = makeStyles({
  biography: {
    flexGrow: 3,
    backgroundColor: "gray"
  }
})
export default function Biography() {
  const classes = useStyles()
  return <Box className={classes.biography}>Item 2</Box>
}
