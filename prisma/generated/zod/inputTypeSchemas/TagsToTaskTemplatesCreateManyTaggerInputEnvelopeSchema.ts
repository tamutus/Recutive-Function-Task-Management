import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagsToTaskTemplatesCreateManyTaggerInputSchema } from './TagsToTaskTemplatesCreateManyTaggerInputSchema';

export const TagsToTaskTemplatesCreateManyTaggerInputEnvelopeSchema: z.ZodType<Prisma.TagsToTaskTemplatesCreateManyTaggerInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TagsToTaskTemplatesCreateManyTaggerInputSchema),z.lazy(() => TagsToTaskTemplatesCreateManyTaggerInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default TagsToTaskTemplatesCreateManyTaggerInputEnvelopeSchema;
