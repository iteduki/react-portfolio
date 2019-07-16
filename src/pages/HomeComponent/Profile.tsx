import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box } from "@material-ui/core"
import icon from "../../assets/icon.jpg"
import { FaTwitter, FaGithub, FaLink } from "react-icons/fa"

const useStyles = makeStyles({
  profile: {
    flexGrow: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  sns: {
    display: "flex"
  },
  snsIcon: {
    padding: 16
  }
})

export default function Profile() {
  const classes = useStyles()
  const iconSize = 32
  return (
    <Box className={classes.profile}>
      <Box>
        <img src={icon} alt="" />
      </Box>
      <Box>
        <h2>iteduki</h2>
        <h3>Software Engineer</h3>
      </Box>
      <Box className={classes.sns}>
        <Box className={classes.snsIcon}>
          <FaTwitter size={iconSize} style={{ color: "#55acee" }} />
        </Box>
        <Box className={classes.snsIcon}>
          <FaGithub size={iconSize} style={{ color: "#4183c4" }} />
        </Box>
        <Box className={classes.snsIcon}>
          <FaLink size={iconSize} />
        </Box>
      </Box>
    </Box>
  )
}
