import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const TaskWorkCreateManyInputSchema: z.ZodType<Prisma.TaskWorkCreateManyInput> = z.object({
  id: z.number().int().optional(),
  taskId: z.number().int(),
  notes: z.string().optional().nullable(),
  startedAt: z.coerce.date().optional().nullable(),
  endedAt: z.coerce.date().optional().nullable()
}).strict();

export default TaskWorkCreateManyInputSchema;
