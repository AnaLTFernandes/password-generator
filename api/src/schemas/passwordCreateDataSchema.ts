import { ICreatePassword } from "../interfaces/ICreatePassword.js";
import joi from "joi";

export const passwordCreateDataSchema = joi.object<ICreatePassword>({
  length: joi.number().required(),
});
