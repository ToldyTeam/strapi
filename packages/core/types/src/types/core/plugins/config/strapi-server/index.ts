import type { Config } from './config';
import type { Routes } from './routes';
import type { ContentTypes } from './content-types';
import type { Controllers } from './controllers';
import type { Register, Bootstrap, Destroy } from './lifecycle';

export interface ServerObject {
  register: Register;
  bootstrap: Bootstrap;
  destroy: Destroy;
  config: Config;
  routes: Routes;
  contentTypes: ContentTypes;
  controllers: Controllers;
  // TODO
  registerTrads: any;
  services: any;
  policies: any;
  middlewares: any;
}

export type ServerFunction = () => ServerObject;

// Interface for the plugin strapi-server file
export type Server = ServerObject | ServerFunction;

export type * from './config';
export type * from './routes';
export type * from './content-types';
export type * from './controllers';
export type * from './lifecycle';
