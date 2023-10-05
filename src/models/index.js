// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Updatepwd, Entity2, Login } = initSchema(schema);

export {
  Updatepwd,
  Entity2,
  Login
};