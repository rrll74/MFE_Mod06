const characterPostMiddleware = (req, res, next) => {
  if (req.method === 'GET') {
    console.log(req);
  } else if (req.method === 'POST') {
    req.body = {
      ...req.body,
      thumbNailUrl: '/thumbnails/new-character.png',
    };
  }
  next();
};

export const characterMiddleware = (req, res, next) => {
  if (req.path === '/character') {
    characterPostMiddleware(req, res, next);
  } else {
    next();
  }
};
