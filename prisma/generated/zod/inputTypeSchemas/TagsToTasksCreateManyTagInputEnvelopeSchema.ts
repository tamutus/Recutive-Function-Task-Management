import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagsToTasksCreateManyTagInputSchema } from './TagsToTasksCreateManyTagInputSchema';

export const TagsToTasksCreateManyTagInputEnvelopeSchema: z.ZodType<Prisma.TagsToTasksCreateManyTagInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TagsToTasksCreateManyTagInputSchema),z.lazy(() => TagsToTasksCreateManyTagInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default TagsToTasksCreateManyTagInputEnvelopeSchema;
