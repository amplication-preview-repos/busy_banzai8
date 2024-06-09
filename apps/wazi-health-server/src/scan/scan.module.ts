import { Module } from "@nestjs/common";
import { ScanModuleBase } from "./base/scan.module.base";
import { ScanService } from "./scan.service";
import { ScanController } from "./scan.controller";
import { ScanResolver } from "./scan.resolver";

@Module({
  imports: [ScanModuleBase],
  controllers: [ScanController],
  providers: [ScanService, ScanResolver],
  exports: [ScanService],
})
export class ScanModule {}
