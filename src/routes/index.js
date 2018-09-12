import { Router } from "express";
import links from "./links.routes";

const router = Router();

router.get("/", (req, res) => res.json({ message: "Hello World!" }));
router.use("/links", links);

export default router;
