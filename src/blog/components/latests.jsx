export const getLatestArticle = async (num) => {
  const url = process.env.REACT_APP_CMSURL;
  const article = fetch(
    url + `/content/items/Articles?limit=${num}&sort={_created:true}`
  )
    .then((data) => data.json())
    .catch(() => {
      return { Text: "<h1>Not Found</h1>" };
    });
  const txt = await article;
  return txt;
};
