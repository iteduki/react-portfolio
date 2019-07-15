import React from "react"
import { AppBar, Tabs, Tab, Toolbar, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  flex: {
    flex: 1
  }
})

export default function SimpleTabs() {
  const classes = useStyles()
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={`${classes.flex}`}>
          My Portfolio!
        </Typography>
        <Tabs value={0}>
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Toolbar>
    </AppBar>
  )
}
