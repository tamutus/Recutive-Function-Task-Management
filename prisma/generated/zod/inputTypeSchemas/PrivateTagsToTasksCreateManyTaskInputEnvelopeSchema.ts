import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToTasksCreateManyTaskInputSchema } from './PrivateTagsToTasksCreateManyTaskInputSchema';

export const PrivateTagsToTasksCreateManyTaskInputEnvelopeSchema: z.ZodType<Prisma.PrivateTagsToTasksCreateManyTaskInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PrivateTagsToTasksCreateManyTaskInputSchema),z.lazy(() => PrivateTagsToTasksCreateManyTaskInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PrivateTagsToTasksCreateManyTaskInputEnvelopeSchema;
