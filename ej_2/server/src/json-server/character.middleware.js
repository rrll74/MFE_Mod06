const characterMiddleware = (req, res, next) => {
  if (req.method === 'POST') {
    req.body = {
      ...req.body,
      thumbNailUrl: '/thumbnails/new-character.png',
    };
  }
  next();
};

export default (req, res, next) => {
  if (req.path === '/characters') {
    characterMiddleware(req, res, next);
  } else {
    next();
  }
};
