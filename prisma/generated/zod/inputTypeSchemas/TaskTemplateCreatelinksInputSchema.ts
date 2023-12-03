import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const TaskTemplateCreatelinksInputSchema: z.ZodType<Prisma.TaskTemplateCreatelinksInput> = z.object({
  set: z.string().array()
}).strict();

export default TaskTemplateCreatelinksInputSchema;
