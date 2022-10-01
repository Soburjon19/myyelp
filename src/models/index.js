import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const { Restaurant } = initSchema(schema);

export {
  Restaurant
};