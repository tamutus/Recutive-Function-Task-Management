import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagsToTaskTemplatesCreateManyTagInputSchema } from './TagsToTaskTemplatesCreateManyTagInputSchema';

export const TagsToTaskTemplatesCreateManyTagInputEnvelopeSchema: z.ZodType<Prisma.TagsToTaskTemplatesCreateManyTagInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TagsToTaskTemplatesCreateManyTagInputSchema),z.lazy(() => TagsToTaskTemplatesCreateManyTagInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default TagsToTaskTemplatesCreateManyTagInputEnvelopeSchema;
