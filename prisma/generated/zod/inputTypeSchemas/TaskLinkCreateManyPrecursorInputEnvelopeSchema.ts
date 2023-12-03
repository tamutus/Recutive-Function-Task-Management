import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskLinkCreateManyPrecursorInputSchema } from './TaskLinkCreateManyPrecursorInputSchema';

export const TaskLinkCreateManyPrecursorInputEnvelopeSchema: z.ZodType<Prisma.TaskLinkCreateManyPrecursorInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TaskLinkCreateManyPrecursorInputSchema),z.lazy(() => TaskLinkCreateManyPrecursorInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default TaskLinkCreateManyPrecursorInputEnvelopeSchema;
