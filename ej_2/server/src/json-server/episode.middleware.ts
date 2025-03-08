const episodePostMiddleware = (req, res, next) => {
  // if (req.method === 'POST') {
  //   req.body = {
  //     ...req.body,
  //     thumbNailUrl: '/thumbnails/new-character.png',
  //   };
  // }
  next();
};

export const episodeMiddleware = (req, res, next) => {
  if (req.path === '/episode') {
    episodePostMiddleware(req, res, next);
  } else {
    next();
  }
};
