import { Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';
import { Item } from '../db/models/item';

export type CreateItemDto = {
  name: Item['name'];
  description: Item['description'];
  price: Item['price'];
};

export type UpdateItemDto = CreateItemDto;

export type ItemTemplate = {
  name: Item['name'];
  description: Item['description'];
  price: Item['price'];
};

@Injectable()
export class ItemsService {
  constructor(private readonly dbService: DbService) {}

  /** Step 2 : */

  // template(): ItemTemplate {
  //   /* ... */
  // }

  // display(dto: Omit<Item, 'id'>): Omit<Item, 'id'> {
  //   /* ... */
  // }

  /** Step 4 : */

  // create(dto: CreateItemDto): Item {
  //   /* ... */
  // }

  // list(): Item[] {
  //   /* ... */
  // }

  // read(itemId: Item['id']): Item {
  //   /* ... */
  // }

  // update(itemId: Item['id'], dto: UpdateItemDto): Item {
  //   /* ... */
  // }

  // delete(itemId: Item['id']): void {
  //   /* ... */
  // }
}
