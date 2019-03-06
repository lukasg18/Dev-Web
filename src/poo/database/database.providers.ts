import { createConnection } from 'typeorm';

// export const databaseProviders = [
//   {
//     provide: 'DbConnectionToken',
//     useFactory: async () => await createConnection({
//       type: 'postgres',
//       host: 'localhost',
//       port: 5432,
//       username: 'postgres',
//       password: '123',
//       database: 'postgres',
//       entities: [
//           __dirname + '/../**/*.entity{.ts,.js}',
//       ],
//       dropSchema:false,
//       synchronize: true,
//     }),
//   },
// ];

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async () => await createConnection({
      type: 'postgres',
      host: 'elmer.db.elephantsql.com',
      port: 5432,
      username: 'aiexkamd',
      password: 'QpfBdkd4AT2chCRjdjGbPPoSXdctwU9y',
      database: 'aiexkamd',
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: false,
    }),
  },
];