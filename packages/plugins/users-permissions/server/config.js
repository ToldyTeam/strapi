'use strict';

module.exports = {
  default: ({ env }) => ({
    jwtSecret: env('JWT_SECRET'),
    jwt: {
      expiresIn: '6y',
    },
    ratelimit: {
      interval: 30000,
      max: 1000,
    },
    layout: {
      user: {
        actions: {
          create: 'contentManagerUser.create', // Use the User plugin's controller.
          update: 'contentManagerUser.update',
        },
      },
    },
  }),
  validator() {},
};
