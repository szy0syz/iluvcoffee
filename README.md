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
