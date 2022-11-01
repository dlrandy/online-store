import {
  Controller,
  Get,
  Render,
  Post,
  Redirect,
  Body,
  Res,
  Req,
} from "@nestjs/common";
import { User } from "../models/user.entity";
import { UsersService } from "../users/users.service";

@Controller("auth")
export class AuthController {
  constructor(private readonly usersService: UsersService) { }

  @Get("/register")
  @Render("auth/register")
  async register() {
    const viewData = [];
    viewData["title"] = "User Register - Online Store";
    viewData["subtitle"] = "User Register";

    return { viewData };
  }

  @Post("/store")
  @Redirect("/")
  async body(@Body() body) {
    const newUser = new User();
    newUser.setName(body.name);
    newUser.setPassword(body.password);
    newUser.setEmail(body.email);
    newUser.setBalance(1000);
    newUser.setRole("client");
    await this.usersService.createOrUpdate(newUser);
  }
  @Get("/login")
  @Render("auth/login")
  login() {
    const viewData = [];
    viewData["title"] = "User Login - Online Store";
    viewData["subtitle"] = "User Login";
    return { viewData };
  }
  @Post("/connect")
  async connect(@Body() body, @Req() request, @Res() response) {
    const email = body.email;
    const pass = body.password;
    const user = await this.usersService.login(email, pass);
    if (user) {
      request.session.user = {
        id: user.getId(),
        name: user.getName(),
        role: user.getRole(),
      };
      return response.redirect("/");
    } else {
      return response.redirect("/auth/login");
    }
  }

  @Get("/logout")
  @Redirect("/")
  logout(@Req() request) {
    request.session.user = null;
  }
}
