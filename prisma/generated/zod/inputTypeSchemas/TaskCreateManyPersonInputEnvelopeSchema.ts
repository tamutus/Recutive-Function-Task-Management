import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateManyPersonInputSchema } from './TaskCreateManyPersonInputSchema';

export const TaskCreateManyPersonInputEnvelopeSchema: z.ZodType<Prisma.TaskCreateManyPersonInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TaskCreateManyPersonInputSchema),z.lazy(() => TaskCreateManyPersonInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default TaskCreateManyPersonInputEnvelopeSchema;
