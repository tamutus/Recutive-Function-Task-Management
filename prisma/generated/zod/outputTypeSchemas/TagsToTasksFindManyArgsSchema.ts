import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagsToTasksIncludeSchema } from '../inputTypeSchemas/TagsToTasksIncludeSchema'
import { TagsToTasksWhereInputSchema } from '../inputTypeSchemas/TagsToTasksWhereInputSchema'
import { TagsToTasksOrderByWithRelationInputSchema } from '../inputTypeSchemas/TagsToTasksOrderByWithRelationInputSchema'
import { TagsToTasksWhereUniqueInputSchema } from '../inputTypeSchemas/TagsToTasksWhereUniqueInputSchema'
import { TagsToTasksScalarFieldEnumSchema } from '../inputTypeSchemas/TagsToTasksScalarFieldEnumSchema'
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

export const TagsToTasksFindManyArgsSchema: z.ZodType<Prisma.TagsToTasksFindManyArgs> = z.object({
  select: TagsToTasksSelectSchema.optional(),
  include: TagsToTasksIncludeSchema.optional(),
  where: TagsToTasksWhereInputSchema.optional(),
  orderBy: z.union([ TagsToTasksOrderByWithRelationInputSchema.array(),TagsToTasksOrderByWithRelationInputSchema ]).optional(),
  cursor: TagsToTasksWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TagsToTasksScalarFieldEnumSchema,TagsToTasksScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default TagsToTasksFindManyArgsSchema;
