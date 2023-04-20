import "dotenv/config.js";
import generatePasswordRepositories from "../repositories/generatePasswordRepositories.js";
import generateRandomString from "../utils/generateRandomString.js";

async function createPassword(length: number): Promise<string> {
  if (length > 25 || length <= 0) {
    throw new Error("Invalid length");
  }

  let newRandomString = generateRandomString.execute(length);

  await generatePasswordRepositories.createPasswordRepository(newRandomString);
  return newRandomString;
}

export default {
  createPassword,
};
