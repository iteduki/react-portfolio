import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box } from "@material-ui/core"
import icon from "../../assets/icon.jpg"
import { FaTwitter, FaGithub, FaLink } from "react-icons/fa"

const useStyles = makeStyles({
  profile: {
    padding: 1,
    flexGrow: 2,
    backgroundColor: "red",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  sns: {
    display: "flex",
    backgroundColor: "blue",
    margin: 20,
    padding: 20
  }
})

export default function Profile() {
  const classes = useStyles()
  return (
    <Box className={classes.profile}>
      <Box>
        <img src={icon} alt="" />
      </Box>
      <Box>Name</Box>
      <Box>Software Engineer</Box>
      <Box className={classes.sns}>
        <FaTwitter />
        <FaGithub />
        <FaLink />
      </Box>
    </Box>
  )
}
