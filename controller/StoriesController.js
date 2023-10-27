const { api } = require("../utils/common");
const $ = require("lodash");

const callAPI = (url) => {
  url += `?api-key=${process.env.NY_TIMES_API_KEY}`;
  return fetch(url).then((res) => res.json());
};

module.exports.getStories = (req, res) =>
  api(res, async () => {
    const { type } = req.params;
    const data = await callAPI(
      `https://api.nytimes.com/svc/topstories/v2/${type}.json`
    );
    res.setHeader('Content-Type', 'application/json');

    res.json({ data: $.get(data, "results", []) });
  });
