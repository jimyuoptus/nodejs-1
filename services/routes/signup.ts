import { RequestValidationError } from "./../../shared/errors/validation-error";
import { AlreadyExistedError } from "./../../shared/errors/already-existed-error";
import express, { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { User } from "../models/user";

const router = express.Router();

router.post(
  "/signup",
  [
    body("email").isEmail().withMessage("Wrong email address"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 10 })
      .withMessage("Password need to be min 4 chars and max 10 chars"),
  ],
  async (req: Request, res: Response, next: NextFunction) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   throw new RequestValidationError(errors.array());
    // }

    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        throw new RequestValidationError(errors.array());
      }

      const { email, password } = req.body;
      const existingUser = await User.findOne({ email: { $regex: new RegExp(email, "i") } });
      if (existingUser) {
        // return res.status(500).json({ message: "Email already existed!" });
        throw new AlreadyExistedError("Email already existed Error!");
      }
      const newUser = new User({ email, password });

      const user = await newUser.save();
      res.send(user);
    } catch (error) {
      // res.status(500).json({ error: (error as Error).message });
      next(error);
    }
  }
);

export { router as signUpRouter };
