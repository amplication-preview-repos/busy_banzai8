import * as graphql from "@nestjs/graphql";
import { ScanResolverBase } from "./base/scan.resolver.base";
import { Scan } from "./base/Scan";
import { ScanService } from "./scan.service";

@graphql.Resolver(() => Scan)
export class ScanResolver extends ScanResolverBase {
  constructor(protected readonly service: ScanService) {
    super(service);
  }
}
