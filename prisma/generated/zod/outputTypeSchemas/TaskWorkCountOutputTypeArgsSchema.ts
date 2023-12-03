import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskWorkCountOutputTypeSelectSchema } from './TaskWorkCountOutputTypeSelectSchema';

export const TaskWorkCountOutputTypeArgsSchema: z.ZodType<Prisma.TaskWorkCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => TaskWorkCountOutputTypeSelectSchema).nullish(),
}).strict();

export default TaskWorkCountOutputTypeSelectSchema;
