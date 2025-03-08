const locationPostMiddleware = (req, res, next) => {
  // if (req.method === 'POST') {
  //   req.body = {
  //     ...req.body,
  //     thumbNailUrl: '/thumbnails/new-character.png',
  //   };
  // }
  next();
};

export const locationMiddleware = (req, res, next) => {
  if (req.path === '/location') {
    locationPostMiddleware(req, res, next);
  } else {
    next();
  }
};
