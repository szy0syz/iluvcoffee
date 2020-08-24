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
app.useGlobalPipes(new ValidationPipe({
  whitelist: true,
  transform: true, // 开启 Payload 转换 Dto instance
  forbidNonWhitelisted: true, // 强制验证 dto 属性正确
}));
```

### Autotransform Payloads to DTO instances

- `npm i @nestjs/mapped-types`
  - `console.log(createCoffeeDto instanceof CreateCoffeeDto);`
  - 还能在控制器中任意转换查询参数

### databse

```yml
version: "3"

services:
  db:
    image: postgres:12
    restart: always
    ports:
      - "5432:5432"
    environment:
      POSTGRES_PASSWORD: pass123
```

- `npm i @nestjs/typeorm typeorm pg`

```ts
// -------- app.module.ts
@Module({
  imports: [
    CoffeesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'pass123',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})

// -------- /src/coffees/entities/coffee.entity.ts
// 算是一种绑定吧 TypeOrmModule 的 autoLoadEntities 可以识别
import { Entity } from 'typeorm'

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
