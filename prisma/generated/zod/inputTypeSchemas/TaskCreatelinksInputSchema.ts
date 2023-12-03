import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const TaskCreatelinksInputSchema: z.ZodType<Prisma.TaskCreatelinksInput> = z.object({
  set: z.string().array()
}).strict();

export default TaskCreatelinksInputSchema;
