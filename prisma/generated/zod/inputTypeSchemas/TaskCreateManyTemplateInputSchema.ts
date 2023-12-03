import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreatelinksInputSchema } from './TaskCreatelinksInputSchema';

export const TaskCreateManyTemplateInputSchema: z.ZodType<Prisma.TaskCreateManyTemplateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  info: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  links: z.union([ z.lazy(() => TaskCreatelinksInputSchema),z.string().array() ]).optional(),
  personId: z.number().int().optional().nullable(),
  public: z.boolean().optional(),
  publicAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  startAt: z.coerce.date().optional().nullable(),
  startedAt: z.coerce.date().optional().nullable(),
  dueAt: z.coerce.date().optional().nullable(),
  endedAt: z.coerce.date().optional().nullable()
}).strict();

export default TaskCreateManyTemplateInputSchema;
