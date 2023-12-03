import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateLinkCreateManySuccessorInputSchema } from './TaskTemplateLinkCreateManySuccessorInputSchema';

export const TaskTemplateLinkCreateManySuccessorInputEnvelopeSchema: z.ZodType<Prisma.TaskTemplateLinkCreateManySuccessorInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TaskTemplateLinkCreateManySuccessorInputSchema),z.lazy(() => TaskTemplateLinkCreateManySuccessorInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default TaskTemplateLinkCreateManySuccessorInputEnvelopeSchema;
