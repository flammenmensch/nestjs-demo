import { Controller, Get, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { AppService } from './app.service';
import { IsNotEmpty } from "class-validator";

class CompressQuery {
  @IsNotEmpty()
  value: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/api')
  @UsePipes(
    new ValidationPipe({
      whitelist: true
    })
  )
  async handleCompress(@Query() query: CompressQuery): Promise<string> {
    return Promise.resolve(this.appService.compress(query.value));
  }
}
