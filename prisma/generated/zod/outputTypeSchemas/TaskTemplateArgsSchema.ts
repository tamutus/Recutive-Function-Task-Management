import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskTemplateSelectSchema } from '../inputTypeSchemas/TaskTemplateSelectSchema';
import { TaskTemplateIncludeSchema } from '../inputTypeSchemas/TaskTemplateIncludeSchema';

export const TaskTemplateArgsSchema: z.ZodType<Prisma.TaskTemplateDefaultArgs> = z.object({
  select: z.lazy(() => TaskTemplateSelectSchema).optional(),
  include: z.lazy(() => TaskTemplateIncludeSchema).optional(),
}).strict();

export default TaskTemplateArgsSchema;
