# egg_server

## 基于egg的小程序中间件

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org


### Sequelize-auto
```bash
sequelize-auto -o "./app/model" -d test -h localhost -u ruoyi -p 3306 -x ruoyi -t sys_dept -e mysql 
```