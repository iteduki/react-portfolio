import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box } from "@material-ui/core"

const useStyles = makeStyles({
  biography: {
    flexGrow: 3,
    backgroundColor: "gray"
  }
})
export default function Biography() {
  const classes = useStyles()
  return (
    <Box className={classes.biography}>
      <Box>
        <h1>Biography</h1>
      </Box>
      <Box>
        <ul>
          <li>iteduki</li>
          <li>1988/01/27</li>
        </ul>
      </Box>
      <Box>
        <h2>学歴・資格</h2>
      </Box>
      <Box>
        <Box>
          <p>岐阜大学工学部応用情報学科</p>
          <p>2010年3月卒</p>
        </Box>
        <Box>
          <p>基本情報技術者試験</p>
          <p>2012年8月</p>
        </Box>
        <Box>
          <p>情報セキュリティマネジメント試験</p>
          <p>2016年5月</p>
        </Box>
      </Box>
    </Box>
  )
}
