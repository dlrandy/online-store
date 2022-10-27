import { Controller, Get, Render } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("/")
  @Render("index")
  index() {
    const viewData = {
      title: "Home Page - online store",
    };

    return {
      viewData,
    };
  }

  @Get("/about")
  @Render("about")
  about() {
    const viewData = {
      author: "Developed by: Your Name",
      description: "This is an about page ...",
      subtitle: "About us",
      title: "About us - Online Store",
    };

    return { viewData };
  }
}
