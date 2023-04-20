import { Router } from "express";
import generatePasswordRouter from "./generatePasswordRoutes.js";

const router = Router();

router.use(generatePasswordRouter);

export default router;
