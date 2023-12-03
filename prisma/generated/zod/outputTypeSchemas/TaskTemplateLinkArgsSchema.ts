import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskTemplateLinkSelectSchema } from '../inputTypeSchemas/TaskTemplateLinkSelectSchema';
import { TaskTemplateLinkIncludeSchema } from '../inputTypeSchemas/TaskTemplateLinkIncludeSchema';

export const TaskTemplateLinkArgsSchema: z.ZodType<Prisma.TaskTemplateLinkDefaultArgs> = z.object({
  select: z.lazy(() => TaskTemplateLinkSelectSchema).optional(),
  include: z.lazy(() => TaskTemplateLinkIncludeSchema).optional(),
}).strict();

export default TaskTemplateLinkArgsSchema;
