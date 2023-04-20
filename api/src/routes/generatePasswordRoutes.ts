import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { passwordCreateDataSchema } from "../schemas/passwordCreateDataSchema.js";
import generatePasswordController from "../controllers/generatePasswordControllers.js";

const generatePasswordRouter = Router();

generatePasswordRouter.post(
  "/generate-password",
  validateSchemaMiddleware(passwordCreateDataSchema),
  generatePasswordController.createPassword
);

export default generatePasswordRouter;
