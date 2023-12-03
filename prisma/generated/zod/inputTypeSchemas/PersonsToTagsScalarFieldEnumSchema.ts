import { z } from 'zod';

export const PersonsToTagsScalarFieldEnumSchema = z.enum(['followerId','tagId']);

export default PersonsToTagsScalarFieldEnumSchema;
