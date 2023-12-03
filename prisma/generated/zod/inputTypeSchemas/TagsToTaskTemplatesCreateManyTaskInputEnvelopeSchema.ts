import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagsToTaskTemplatesCreateManyTaskInputSchema } from './TagsToTaskTemplatesCreateManyTaskInputSchema';

export const TagsToTaskTemplatesCreateManyTaskInputEnvelopeSchema: z.ZodType<Prisma.TagsToTaskTemplatesCreateManyTaskInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TagsToTaskTemplatesCreateManyTaskInputSchema),z.lazy(() => TagsToTaskTemplatesCreateManyTaskInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default TagsToTaskTemplatesCreateManyTaskInputEnvelopeSchema;
