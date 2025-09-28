import express from 'express';

const router = express.Router();

import { router as routerFromUsersTable } from "./UsersTable/routes.js";
import { router as routerFromTokenTable } from "./TokenTable/routes.js";
import { router as routerFromItemsTable } from "./ItemsTable/routes.js";

router.use("/UsersTable", routerFromUsersTable);
router.use("/TokenTable", routerFromTokenTable);
router.use("/ItemsTable", routerFromItemsTable);

export { router };