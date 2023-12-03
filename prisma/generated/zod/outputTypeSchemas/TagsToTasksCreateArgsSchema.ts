import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagsToTasksIncludeSchema } from '../inputTypeSchemas/TagsToTasksIncludeSchema'
import { TagsToTasksCreateInputSchema } from '../inputTypeSchemas/TagsToTasksCreateInputSchema'
import { TagsToTasksUncheckedCreateInputSchema } from '../inputTypeSchemas/TagsToTasksUncheckedCreateInputSchema'
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

export const TagsToTasksCreateArgsSchema: z.ZodType<Prisma.TagsToTasksCreateArgs> = z.object({
  select: TagsToTasksSelectSchema.optional(),
  include: TagsToTasksIncludeSchema.optional(),
  data: z.union([ TagsToTasksCreateInputSchema,TagsToTasksUncheckedCreateInputSchema ]),
}).strict()

export default TagsToTasksCreateArgsSchema;
