import { z } from 'zod';

export const TagsToTaskTemplatesScalarFieldEnumSchema = z.enum(['taskId','tagId','taggerId']);

export default TagsToTaskTemplatesScalarFieldEnumSchema;
