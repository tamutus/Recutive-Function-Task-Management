import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const TaskWorkCreateManyTaskInputSchema: z.ZodType<Prisma.TaskWorkCreateManyTaskInput> = z.object({
  id: z.number().int().optional(),
  notes: z.string().optional().nullable(),
  startedAt: z.coerce.date().optional().nullable(),
  endedAt: z.coerce.date().optional().nullable()
}).strict();

export default TaskWorkCreateManyTaskInputSchema;
