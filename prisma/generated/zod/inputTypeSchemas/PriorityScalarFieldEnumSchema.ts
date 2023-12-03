import { z } from 'zod';

export const PriorityScalarFieldEnumSchema = z.enum(['id','personId','info','color']);

export default PriorityScalarFieldEnumSchema;
