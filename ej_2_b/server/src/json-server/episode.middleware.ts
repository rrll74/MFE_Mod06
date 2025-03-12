export const episodeMiddleware = (req, res, next) => {
  if (req.path === '/episode') {
    if (req.method === 'GET') {
      // console.log('-------------Objeto REQ: ', req.query);
    } else if (req.method === 'POST') {
      // req.body = {
      //   ...req.body,
      //   thumbNailUrl: '/thumbnails/new-character.png',
      // };
    }
  }
  next();
};
