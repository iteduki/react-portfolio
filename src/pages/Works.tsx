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
  cardBox: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    maxWidth: (300 + 16) * 4
  },
  card: {
    margin: 16,
    height: 300,
    width: 280
  }
})

export default function Works() {
  const classes = useStyles()
  return (
    <Box className={classes.works}>
      <Typography variant="h2">Works</Typography>
      <Box className={classes.cardBox}>
        {contents.map((item: Contents, key) => {
          return (
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body1">
                  {item.tools}
                  <br />
                  {item.description}
                </Typography>
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
