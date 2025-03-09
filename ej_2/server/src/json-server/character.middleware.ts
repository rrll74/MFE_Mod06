export const characterMiddleware = (req, res, next) => {
  if (req.path.indexOf('/character') !== -1) {
    if (req.method === 'GET') {
      // console.log('-------------Objeto REQ: ', req.query);
    } else if (req.method === 'POST') {
      req.body = {
        ...req.body,
        thumbNailUrl: '/thumbnails/new-character.png',
      };
    }
  }
  next();
};
