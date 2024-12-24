import { readFileSync, writeFileSync } from 'node:fs';
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Item } from './models/item';

@Injectable()
export class DbService implements OnModuleInit, OnModuleDestroy {
  private db: Item[];

  onModuleInit() {
    const data = readFileSync('database.json', { encoding: 'utf-8' });

    this.db = JSON.parse(data);
  }

  create(item: Omit<Item, 'id'>): Item {
    const internalItem = { id: this.db.length, ...item };

    this.db.push(internalItem);

    return internalItem;
  }

  list(): Item[] {
    return this.db;
  }

  read(itemId: Item['id']): Item {
    return this.db.find((item) => itemId === item.id);
  }

  update(itemId: Item['id'], newItem: Omit<Item, 'id'>): Item {
    const itemIndex = this.db.map((item) => item.id).indexOf(itemId);

    this.db[itemIndex] = { id: itemId, ...newItem };

    return this.db[itemIndex];
  }

  delete(itemId: Item['id']): void {
    this.db = this.db.filter((item) => itemId !== item.id);
  }

  onModuleDestroy() {
    const data = JSON.stringify(this.db);

    writeFileSync('database.json', data, { encoding: 'utf-8', flag: 'w+' });
  }
}
