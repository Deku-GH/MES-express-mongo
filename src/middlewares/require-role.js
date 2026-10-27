import { json } from 'node:stream/consumers';
import { HttpError, notImplemented } from '../shared/http-error.js';
export function requireRole(...roles) {
  return function checkRole(req, res, next) {

  if (!roles.includes(req.user.role)){
   return res.status(403).json({
                success: false,
                message: "ce role not mautch a role"
            });
  }

  

    next()
  };
}
