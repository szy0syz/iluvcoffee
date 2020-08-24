# iluvcoffee

## Notes

- `nest g co`
- `nest g co --no-spec`
- `nest generate controller modules/abc --dry-run`
- `nest g s`
- `nest g module coffees`
- `nest g class coffees/dto/create-coffee.dto --no-spec`
- `nest g class coffees/dto/update-coffee.dto --no-spec`

- `app.useGlobalPipes(new ValidationPipe());`
  - 各种 dto 的验证开启

```ts
app.useGlobalPipes(
  new ValidationPipe({
    whitelist: true,
    transform: true, // 开启 Payload 转换 Dto instance
    forbidNonWhitelisted: true, // 强制验证 dto 属性正确
  }),
);
```

### Autotransform Payloads to DTO instances

- `npm i @nestjs/mapped-types`
  - `console.log(createCoffeeDto instanceof CreateCoffeeDto);`
  - 还能在控制器中任意转换查询参数

### databse

```yml
version: '3'

services:
  db:
    image: postgres:12
    restart: always
    ports:
      - '5432:5432'
    environment:
      POSTGRES_PASSWORD: pass123
```

- `npm i @nestjs/typeorm typeorm pg`

```ts
// -------- app.module.ts
import {
  // -------- /src/coffees/entities/coffee.entity.ts
  // 算是一种绑定吧 TypeOrmModule 的 autoLoadEntities 可以识别
  Entity,
} from 'typeorm';

@Entity('coffees') // ! -> sql table === 'coffees'
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column('json', { nullable: true })
  flavors: string[];
}
```

![a1](images/WX20200824-094155.png)

### Create a Relation between two Entities

![a2](images/WX20200824-101639.png)

- `nest g class coffees/entities/flavor.entity --no-spec`

- 在 N 张表级联时，手动在服务层 find\* 的函数中添加级联参数: `relations: ['flavors']`
- model 层增加参数: `{ cascade: true }`  为了插入时用
