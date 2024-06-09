import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ScanService } from "./scan.service";
import { ScanControllerBase } from "./base/scan.controller.base";

@swagger.ApiTags("scans")
@common.Controller("scans")
export class ScanController extends ScanControllerBase {
  constructor(protected readonly service: ScanService) {
    super(service);
  }
}
