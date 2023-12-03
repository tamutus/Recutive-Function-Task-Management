import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskLinkSelectSchema } from '../inputTypeSchemas/TaskLinkSelectSchema';
import { TaskLinkIncludeSchema } from '../inputTypeSchemas/TaskLinkIncludeSchema';

export const TaskLinkArgsSchema: z.ZodType<Prisma.TaskLinkDefaultArgs> = z.object({
  select: z.lazy(() => TaskLinkSelectSchema).optional(),
  include: z.lazy(() => TaskLinkIncludeSchema).optional(),
}).strict();

export default TaskLinkArgsSchema;
