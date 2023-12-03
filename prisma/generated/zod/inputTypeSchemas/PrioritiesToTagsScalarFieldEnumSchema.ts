import { z } from 'zod';

export const PrioritiesToTagsScalarFieldEnumSchema = z.enum(['tagId','priorityId','notes']);

export default PrioritiesToTagsScalarFieldEnumSchema;
