import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";

import * as hbs from "hbs";
import * as hbsUtils from "hbs-utils";
import * as session from "express-session";
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  console.log(__dirname);
  app.useStaticAssets(join(__dirname, "..", "..", "public"));
  app.setBaseViewsDir(join(__dirname, "..", "..", "views"));
  hbs.registerPartials(join(__dirname, "..", "..", "views", "layouts"));
  hbsUtils(hbs).registerWatchedPartials(
    join(__dirname, "..", "..", "views", "layouts")
  );
  app.setViewEngine("hbs");
  app.use(
    session({
      secret: "nest-store",
      resave: false,
      saveUninitialized: false,
    })
  );
  app.use(function (req, res, next) {
    res.locals.session = req.session;
    next();
  });
  app.use("/admin", function (req, res, next) {
    if (req.session.user?.role === "admin") {
      next();
    } else {
      res.redirect("/");
    }
  });
  await app.listen(3000);
}
bootstrap();
