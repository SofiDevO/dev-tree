import {Router} from 'express';
import {body} from 'express-validator';

import createAccount from './handlers';

const router = Router();



//! authentication and registration
router.post("/auth/register", (req, res, next) => {
  body("handle").notEmpty().withMessage("Username is required"),
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("you need to provide a valid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
    createAccount(req, res).catch(next);
});

export default router;
