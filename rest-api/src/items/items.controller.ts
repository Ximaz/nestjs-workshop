import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { Item } from '../db/models/item';
import { AuthGuard } from '../auth/guards/auth.guard';
import {
  CreateItemDto,
  ItemsService,
  ItemTemplate,
  UpdateItemDto,
} from './items.service';

@Controller('/items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  /** Step 2 : */

  // @Get('/template')
  // template(): ItemTemplate {
  //   /* ... */
  // }

  // @Post('/display')
  // display(@Body() displayDto: Omit<Item, 'id'>): Omit<Item, 'id'> {
  //   /* ... */
  // }

  /** Step 3 and 4 : */

  // @UseGuards(AuthGuard)
  // @Post('/')
  // create(@Body() createItemDto: CreateItemDto): Item {
  //   /* ... */
  // }

  // @UseGuards(AuthGuard)
  // @Get('/')
  // list(): Item[] {
  //   /* ... */
  // }

  // @UseGuards(AuthGuard)
  // @Get('/:id')
  // read(@Param('id', ParseIntPipe) itemId: number): Item {
  //   /* ... */
  // }

  // @UseGuards(AuthGuard)
  // @Put('/:id')
  // update(
  //   @Param('id', ParseIntPipe) itemId: number,
  //   updateItemDto: UpdateItemDto,
  // ): Item {
  //   /* ... */
  // }

  // @UseGuards(AuthGuard)
  // @Delete('/:id')
  // delete(@Param('id', ParseIntPipe) itemId: number): void {
  //   /* ... */
  // }
}
