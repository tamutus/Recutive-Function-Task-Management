import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagsToTasksIncludeSchema } from '../inputTypeSchemas/TagsToTasksIncludeSchema'
import { TagsToTasksWhereUniqueInputSchema } from '../inputTypeSchemas/TagsToTasksWhereUniqueInputSchema'
import { TagArgsSchema } from "../outputTypeSchemas/TagArgsSchema"
import { TaskArgsSchema } from "../outputTypeSchemas/TaskArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TagsToTasksSelectSchema: z.ZodType<Prisma.TagsToTasksSelect> = z.object({
  tagId: z.boolean().optional(),
  taskId: z.boolean().optional(),
  tag: z.union([z.boolean(),z.lazy(() => TagArgsSchema)]).optional(),
  task: z.union([z.boolean(),z.lazy(() => TaskArgsSchema)]).optional(),
}).strict()

export const TagsToTasksDeleteArgsSchema: z.ZodType<Prisma.TagsToTasksDeleteArgs> = z.object({
  select: TagsToTasksSelectSchema.optional(),
  include: TagsToTasksIncludeSchema.optional(),
  where: TagsToTasksWhereUniqueInputSchema,
}).strict()

export default TagsToTasksDeleteArgsSchema;
