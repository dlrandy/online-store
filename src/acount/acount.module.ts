import { Module } from "@nestjs/common";
import { AcountController } from "./acount.controller";

@Module({
  controllers: [AcountController],
})
export class AcountModule { }
