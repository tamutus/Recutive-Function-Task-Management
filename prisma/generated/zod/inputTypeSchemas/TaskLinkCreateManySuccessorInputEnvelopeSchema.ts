import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskLinkCreateManySuccessorInputSchema } from './TaskLinkCreateManySuccessorInputSchema';

export const TaskLinkCreateManySuccessorInputEnvelopeSchema: z.ZodType<Prisma.TaskLinkCreateManySuccessorInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TaskLinkCreateManySuccessorInputSchema),z.lazy(() => TaskLinkCreateManySuccessorInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default TaskLinkCreateManySuccessorInputEnvelopeSchema;
