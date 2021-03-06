import User from '../models/user.js';

export function getUser(req, res) {
  User.findOne({ githubID: req.cookies.user }, (err, person) => {
    if (!person) {
      res.json(false);
    } else {
      res.json(person.id === Number(req.cookies.id));
    }
  });
}
