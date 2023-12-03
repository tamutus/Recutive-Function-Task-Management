import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskTemplateCountOutputTypeSelectSchema } from './TaskTemplateCountOutputTypeSelectSchema';

export const TaskTemplateCountOutputTypeArgsSchema: z.ZodType<Prisma.TaskTemplateCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => TaskTemplateCountOutputTypeSelectSchema).nullish(),
}).strict();

export default TaskTemplateCountOutputTypeSelectSchema;
