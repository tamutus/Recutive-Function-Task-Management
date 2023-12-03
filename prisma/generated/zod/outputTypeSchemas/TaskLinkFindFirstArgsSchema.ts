import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskLinkIncludeSchema } from '../inputTypeSchemas/TaskLinkIncludeSchema'
import { TaskLinkWhereInputSchema } from '../inputTypeSchemas/TaskLinkWhereInputSchema'
import { TaskLinkOrderByWithRelationInputSchema } from '../inputTypeSchemas/TaskLinkOrderByWithRelationInputSchema'
import { TaskLinkWhereUniqueInputSchema } from '../inputTypeSchemas/TaskLinkWhereUniqueInputSchema'
import { TaskLinkScalarFieldEnumSchema } from '../inputTypeSchemas/TaskLinkScalarFieldEnumSchema'
import { TaskArgsSchema } from "../outputTypeSchemas/TaskArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TaskLinkSelectSchema: z.ZodType<Prisma.TaskLinkSelect> = z.object({
  precursorId: z.boolean().optional(),
  successorId: z.boolean().optional(),
  linkType: z.boolean().optional(),
  precursor: z.union([z.boolean(),z.lazy(() => TaskArgsSchema)]).optional(),
  successor: z.union([z.boolean(),z.lazy(() => TaskArgsSchema)]).optional(),
}).strict()

export const TaskLinkFindFirstArgsSchema: z.ZodType<Prisma.TaskLinkFindFirstArgs> = z.object({
  select: TaskLinkSelectSchema.optional(),
  include: TaskLinkIncludeSchema.optional(),
  where: TaskLinkWhereInputSchema.optional(),
  orderBy: z.union([ TaskLinkOrderByWithRelationInputSchema.array(),TaskLinkOrderByWithRelationInputSchema ]).optional(),
  cursor: TaskLinkWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TaskLinkScalarFieldEnumSchema,TaskLinkScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default TaskLinkFindFirstArgsSchema;
