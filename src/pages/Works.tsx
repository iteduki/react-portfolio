import React from "react"
import {
  Box,
  Typography,
  makeStyles,
  Card,
  CardContent,
  Button
} from "@material-ui/core"
import contents from "./WorksComponent/contents.json"

type Contents = {
  title: string
  tools: Array<String>
  description: string
  href?: string
}

const cardWidth = 360
const cardMargin = 20
const useStyles = makeStyles({
  works: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 20
  },
  cardBox: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    maxWidth: (cardWidth + cardMargin * 2) * 3 // 一行にCard3つまで
  },
  card: {
    margin: cardMargin,
    height: 300,
    width: cardWidth
  }
})

export default function Works() {
  const classes = useStyles()
  return (
    <Box className={classes.works}>
      <Typography variant="h2">Works</Typography>
      <Box className={classes.cardBox}>
        {contents.map((item: Contents) => {
          return (
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h5">{item.title}</Typography>
                <Typography variant="body1">
                  {item.tools.join(" + ")}
                </Typography>
                <Typography variant="body2">{item.description}</Typography>
                {item.href ? (
                  <Button
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.href}
                  >
                    リンク
                  </Button>
                ) : null}
              </CardContent>
            </Card>
          )
        })}
      </Box>
    </Box>
  )
}
