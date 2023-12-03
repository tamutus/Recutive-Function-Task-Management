import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWorkCreateManyTaskInputSchema } from './TaskWorkCreateManyTaskInputSchema';

export const TaskWorkCreateManyTaskInputEnvelopeSchema: z.ZodType<Prisma.TaskWorkCreateManyTaskInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TaskWorkCreateManyTaskInputSchema),z.lazy(() => TaskWorkCreateManyTaskInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default TaskWorkCreateManyTaskInputEnvelopeSchema;
