import React from "react"
import {
  Box,
  Typography,
  makeStyles,
  Card,
  CardContent
} from "@material-ui/core"
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
  },
  cardBox: { display: "flex", flexWrap: "wrap" },
  card: {
    padding: 16
  }
})

export default function Works() {
  const classes = useStyles()
  return (
    <Box className={classes.works}>
      <Typography variant="h1">Works</Typography>
      <Box className={classes.cardBox}>
        {contents.map((item: Contents, key) => {
          return (
            <Box className={classes.card}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{item.title}</Typography>
                </CardContent>
              </Card>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}
