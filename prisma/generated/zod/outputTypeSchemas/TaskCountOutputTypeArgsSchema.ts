import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskCountOutputTypeSelectSchema } from './TaskCountOutputTypeSelectSchema';

export const TaskCountOutputTypeArgsSchema: z.ZodType<Prisma.TaskCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => TaskCountOutputTypeSelectSchema).nullish(),
}).strict();

export default TaskCountOutputTypeSelectSchema;
