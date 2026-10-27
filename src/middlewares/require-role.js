import { HttpError, notImplemented } from '../shared/http-error.js';
export function requireRole(...roles) {
  return function checkRole(req, res, next) {
try {
    if (!req.user.role.includes(roles)) throw new Error();
} catch (error) {
     throw new HttpError(404, "");
}
  

    next()
  };
}
