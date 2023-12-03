import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateLinkCreateManyPrecursorInputSchema } from './TaskTemplateLinkCreateManyPrecursorInputSchema';

export const TaskTemplateLinkCreateManyPrecursorInputEnvelopeSchema: z.ZodType<Prisma.TaskTemplateLinkCreateManyPrecursorInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TaskTemplateLinkCreateManyPrecursorInputSchema),z.lazy(() => TaskTemplateLinkCreateManyPrecursorInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default TaskTemplateLinkCreateManyPrecursorInputEnvelopeSchema;
