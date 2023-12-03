import { z } from 'zod';

export const PrivateTagScalarFieldEnumSchema = z.enum(['id','name','info','nsfw','color','personId']);

export default PrivateTagScalarFieldEnumSchema;
