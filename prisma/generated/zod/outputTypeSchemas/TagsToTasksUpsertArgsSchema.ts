import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagsToTasksIncludeSchema } from '../inputTypeSchemas/TagsToTasksIncludeSchema'
import { TagsToTasksWhereUniqueInputSchema } from '../inputTypeSchemas/TagsToTasksWhereUniqueInputSchema'
import { TagsToTasksCreateInputSchema } from '../inputTypeSchemas/TagsToTasksCreateInputSchema'
import { TagsToTasksUncheckedCreateInputSchema } from '../inputTypeSchemas/TagsToTasksUncheckedCreateInputSchema'
import { TagsToTasksUpdateInputSchema } from '../inputTypeSchemas/TagsToTasksUpdateInputSchema'
import { TagsToTasksUncheckedUpdateInputSchema } from '../inputTypeSchemas/TagsToTasksUncheckedUpdateInputSchema'
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

export const TagsToTasksUpsertArgsSchema: z.ZodType<Prisma.TagsToTasksUpsertArgs> = z.object({
  select: TagsToTasksSelectSchema.optional(),
  include: TagsToTasksIncludeSchema.optional(),
  where: TagsToTasksWhereUniqueInputSchema,
  create: z.union([ TagsToTasksCreateInputSchema,TagsToTasksUncheckedCreateInputSchema ]),
  update: z.union([ TagsToTasksUpdateInputSchema,TagsToTasksUncheckedUpdateInputSchema ]),
}).strict()

export default TagsToTasksUpsertArgsSchema;
