## Description

Generic JWT based authentication service.

This service uses redis and postgres for storing and refreshing user tokens. There is an endpoint for sign-up and sign-in

## Dependencies

1. @nestjs/common : ^10.0.0
2. @nestjs/config : ^3.1.1
3. @nestjs/core : ^10.0.0
4. @nestjs/jwt : ^10.2.0
5. @nestjs/mapped-types : \*
6. @nestjs/platform-express : ^10.0.0
7. @nestjs/typeorm : ^10.0.1
8. bcrypt : ^5.1.1
9. class-transformer : ^0.5.1
10. class-validator : ^0.14.0
11. ioredis : ^5.3.2
12. pg : ^8.11.3
13. reflect-metadata : ^0.1.13
14. rxjs : ^7.8.1
15. typeorm : ^0.3.17

## Installation

```bash
$ nvm use
$ npm ci
```

## Interactive documentation

```bash
$ npx @compodoc/compodoc -p tsconfig.json -s
```

Navigate to http://localhost:8080

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
