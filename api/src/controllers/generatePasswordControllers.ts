import { Request, Response } from "express";
import generatePasswordService from "../services/generatePasswordServices.js";

async function createPassword(req: Request, res: Response): Promise<Response> {
	const { length } = req.body;
	try {
		const password = await generatePasswordService.createPassword(length);
		return res.status(200).send({ password });
	} catch (err: any) {
		if (err.message === "Invalid length") {
			return res
				.status(400)
				.send(
					"You cannot create a password longer than 25 characters or less than 0"
				);
		}
		return res.status(500).send(err.message);
	}
}

export default {
	createPassword,
};
