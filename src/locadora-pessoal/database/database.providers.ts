import { createConnection } from 'typeorm';

// export const databaseProviders = [
//   {
//     provide: 'DbConnectionToken',
//     useFactory: async () => await createConnection({
//       type: 'postgres',
//       host: 'localhost',
//       port: 5432,
//       username: 'postgres',
//       password: '123456',
//       database: 'web',
//       entities: [
//           __dirname + '/../**/*.entity{.ts,.js}',
//       ],
//       dropSchema:true,
//       synchronize: true,
//     }),
//   },
// ];

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async () => await createConnection({
      type: 'postgres',
      host: 'stampy.db.elephantsql.com',
      port: 5432,
      username: 'gxiubqwv',
      password: 'Eor0v0XVSaO5EkcKrqGwSL2tlWo_huxc',
      database: 'gxiubqwv',
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      dropSchema:true,
      synchronize: true,
    }),
  },
];