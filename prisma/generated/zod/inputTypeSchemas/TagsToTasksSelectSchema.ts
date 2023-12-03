import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagArgsSchema } from "../outputTypeSchemas/TagArgsSchema"
import { TaskArgsSchema } from "../outputTypeSchemas/TaskArgsSchema"

export const TagsToTasksSelectSchema: z.ZodType<Prisma.TagsToTasksSelect> = z.object({
  tagId: z.boolean().optional(),
  taskId: z.boolean().optional(),
  tag: z.union([z.boolean(),z.lazy(() => TagArgsSchema)]).optional(),
  task: z.union([z.boolean(),z.lazy(() => TaskArgsSchema)]).optional(),
}).strict()

export default TagsToTasksSelectSchema;
