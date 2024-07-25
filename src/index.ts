import express from "express";
import bodyParser from "body-parser";

import { longestCommonPrefix } from "./utils/longestCommonPrefix";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post("/api/v1/longestCommonPrefix", async (req, res) => {
  try {
    const response: String = longestCommonPrefix(req.body.array);
    res.status(200).json({ result: response });
  } catch (e) {
    res.status(500).json({
      status: 500,
      message: e,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
