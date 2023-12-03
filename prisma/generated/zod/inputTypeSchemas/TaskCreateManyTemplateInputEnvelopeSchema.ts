import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateManyTemplateInputSchema } from './TaskCreateManyTemplateInputSchema';

export const TaskCreateManyTemplateInputEnvelopeSchema: z.ZodType<Prisma.TaskCreateManyTemplateInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TaskCreateManyTemplateInputSchema),z.lazy(() => TaskCreateManyTemplateInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default TaskCreateManyTemplateInputEnvelopeSchema;
