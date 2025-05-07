import * as validation from "./validation";
import * as auth from "./auth";
import * as response from "./response";
import * as database from "./database";

export default {
  ...auth,
  ...response,
  ...database,
  ...validation,
};
