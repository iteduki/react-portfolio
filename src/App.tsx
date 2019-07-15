import React from "react"
import { AppBar, Tabs, Tab, Toolbar, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  flex: {
    flex: 1
  },
  title: {
    cursor: "pointer"
  }
})

export default function SimpleTabs() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          className={`${classes.flex} ${classes.title}`}
          onClick={() => setValue(0)}
        >
          My Portfolio!
        </Typography>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Home" />
          <Tab label="Works" />
          <Tab label="Resume" />
        </Tabs>
      </Toolbar>
    </AppBar>
  )
}
