import { z } from 'zod';

export const PersonScalarFieldEnumSchema = z.enum(['id','username','bio']);

export default PersonScalarFieldEnumSchema;
