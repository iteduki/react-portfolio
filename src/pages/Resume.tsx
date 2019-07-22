import React from "react"
import { Box, Typography, Card, CardContent } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
  resume: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 20
  },
  card: {
    width: "100%",
    maxWidth: 1200
  },
  skillCard: { margin: 8 }
})

export default function Resume() {
  const classes = useStyles()
  return (
    <Box className={classes.resume}>
      <Typography variant="h2">Resume</Typography>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h4">都内 SIer</Typography>
          <ul>
            <li>
              <Typography variant="body1">受託開発</Typography>
            </li>
            <li>
              <Typography variant="body1">2018/7 ~</Typography>
            </li>
          </ul>
          <Typography variant="h5">技術</Typography>
          <Box style={{ display: "flex" }}>
            <Card className={classes.skillCard}>
              <CardContent>
                <Typography variant="body1">Ruby on Rails</Typography>
              </CardContent>
            </Card>
            <Card className={classes.skillCard}>
              <CardContent>
                <Typography variant="body1">React Native</Typography>
              </CardContent>
            </Card>
          </Box>
          <Typography variant="h5" gutterBottom>
            コメント
          </Typography>
          <Typography variant="body1">毎日頑張りました</Typography>
        </CardContent>
      </Card>
    </Box>
  )
}
