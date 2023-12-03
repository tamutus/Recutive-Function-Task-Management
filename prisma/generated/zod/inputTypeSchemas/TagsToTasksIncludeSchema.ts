import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagArgsSchema } from "../outputTypeSchemas/TagArgsSchema"
import { TaskArgsSchema } from "../outputTypeSchemas/TaskArgsSchema"

export const TagsToTasksIncludeSchema: z.ZodType<Prisma.TagsToTasksInclude> = z.object({
  tag: z.union([z.boolean(),z.lazy(() => TagArgsSchema)]).optional(),
  task: z.union([z.boolean(),z.lazy(() => TaskArgsSchema)]).optional(),
}).strict()

export default TagsToTasksIncludeSchema;
