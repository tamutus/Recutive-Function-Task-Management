import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagsToTasksCreateManyTaskInputSchema } from './TagsToTasksCreateManyTaskInputSchema';

export const TagsToTasksCreateManyTaskInputEnvelopeSchema: z.ZodType<Prisma.TagsToTasksCreateManyTaskInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TagsToTasksCreateManyTaskInputSchema),z.lazy(() => TagsToTasksCreateManyTaskInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default TagsToTasksCreateManyTaskInputEnvelopeSchema;
