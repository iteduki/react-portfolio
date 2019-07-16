import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box } from "@material-ui/core"
import icon from "../../assets/icon.jpg"

const useStyles = makeStyles({
  profile: {
    padding: 1,
    flexGrow: 2,
    backgroundColor: "red",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
})

export default function Profile() {
  const classes = useStyles()
  return (
    <Box className={classes.profile}>
      <img src={icon} alt="" />
    </Box>
  )
}
