import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskWorkSelectSchema } from '../inputTypeSchemas/TaskWorkSelectSchema';
import { TaskWorkIncludeSchema } from '../inputTypeSchemas/TaskWorkIncludeSchema';

export const TaskWorkArgsSchema: z.ZodType<Prisma.TaskWorkDefaultArgs> = z.object({
  select: z.lazy(() => TaskWorkSelectSchema).optional(),
  include: z.lazy(() => TaskWorkIncludeSchema).optional(),
}).strict();

export default TaskWorkArgsSchema;
