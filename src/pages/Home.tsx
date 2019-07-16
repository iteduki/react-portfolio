import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box } from "@material-ui/core"
import icon from "../assets/icon.jpg"

const useStyles = makeStyles({
  root: {
    display: "flex",
    paddingTop: 50,
    paddingLeft: 100,
    paddingRight: 100
  },
  profile: {
    padding: 1,
    flexGrow: 2,
    backgroundColor: "red",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  biography: {
    padding: 1,
    flexGrow: 3,
    backgroundColor: "gray"
  }
})

type HomeProps = {
  text?: string
}

export default function Home({ text = "Home" }: HomeProps) {
  const classes = useStyles()
  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.profile}>
          <img src={icon} alt="" />
        </Box>
        <Box className={classes.biography}>Item 2</Box>
      </Box>
    </>
  )
}
