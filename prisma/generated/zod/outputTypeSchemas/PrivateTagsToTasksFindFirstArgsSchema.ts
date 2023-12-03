import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagsToTasksIncludeSchema } from '../inputTypeSchemas/PrivateTagsToTasksIncludeSchema'
import { PrivateTagsToTasksWhereInputSchema } from '../inputTypeSchemas/PrivateTagsToTasksWhereInputSchema'
import { PrivateTagsToTasksOrderByWithRelationInputSchema } from '../inputTypeSchemas/PrivateTagsToTasksOrderByWithRelationInputSchema'
import { PrivateTagsToTasksWhereUniqueInputSchema } from '../inputTypeSchemas/PrivateTagsToTasksWhereUniqueInputSchema'
import { PrivateTagsToTasksScalarFieldEnumSchema } from '../inputTypeSchemas/PrivateTagsToTasksScalarFieldEnumSchema'
import { PrivateTagArgsSchema } from "../outputTypeSchemas/PrivateTagArgsSchema"
import { TaskArgsSchema } from "../outputTypeSchemas/TaskArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PrivateTagsToTasksSelectSchema: z.ZodType<Prisma.PrivateTagsToTasksSelect> = z.object({
  tagId: z.boolean().optional(),
  taskId: z.boolean().optional(),
  tag: z.union([z.boolean(),z.lazy(() => PrivateTagArgsSchema)]).optional(),
  task: z.union([z.boolean(),z.lazy(() => TaskArgsSchema)]).optional(),
}).strict()

export const PrivateTagsToTasksFindFirstArgsSchema: z.ZodType<Prisma.PrivateTagsToTasksFindFirstArgs> = z.object({
  select: PrivateTagsToTasksSelectSchema.optional(),
  include: PrivateTagsToTasksIncludeSchema.optional(),
  where: PrivateTagsToTasksWhereInputSchema.optional(),
  orderBy: z.union([ PrivateTagsToTasksOrderByWithRelationInputSchema.array(),PrivateTagsToTasksOrderByWithRelationInputSchema ]).optional(),
  cursor: PrivateTagsToTasksWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PrivateTagsToTasksScalarFieldEnumSchema,PrivateTagsToTasksScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default PrivateTagsToTasksFindFirstArgsSchema;
