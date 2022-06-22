exports.handler = async function (event, context) {
  console.log(event);
  console.log(context);
  try {
    const res = await fetch(
      `https://api.currentsapi.services/v1/latest-news?apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ title: res.news }),
    };
  } catch (err) {
    return {
      statusCode: 404,
      body: err.toString(),
    };
  }
};
