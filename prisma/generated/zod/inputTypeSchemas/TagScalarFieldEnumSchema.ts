import { z } from 'zod';

export const TagScalarFieldEnumSchema = z.enum(['id','name','info','nsfw','color']);

export default TagScalarFieldEnumSchema;
