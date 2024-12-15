import {Router} from "express"
import { submitContactForm } from "../controller/contactController.js";

const router = Router();

router.post('/submit', submitContactForm)

export default router;