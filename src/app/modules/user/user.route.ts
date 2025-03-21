import { Router } from "express";
import { userController } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { userValidation } from "./user.validation";

const userRoute = Router();

userRoute.post(
    "/register", validateRequest(userValidation.UserSchema) , userController.createUser
)

export default userRoute