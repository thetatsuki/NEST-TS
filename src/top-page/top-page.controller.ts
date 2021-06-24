import { Body, Controller, Delete, Post } from '@nestjs/common';
import { FindTopPageDto } from './dto/find-top-page.dto';


@Controller('top-page')
export class TopPageController {

    @Post('find')
    async getByCategory(@Body() dto: FindTopPageDto) {

    }
}
