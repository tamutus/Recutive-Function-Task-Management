import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToTasksIncludeSchema } from '../inputTypeSchemas/PrioritiesToTasksIncludeSchema'
import { PrioritiesToTasksWhereInputSchema } from '../inputTypeSchemas/PrioritiesToTasksWhereInputSchema'
import { PrioritiesToTasksOrderByWithRelationInputSchema } from '../inputTypeSchemas/PrioritiesToTasksOrderByWithRelationInputSchema'
import { PrioritiesToTasksWhereUniqueInputSchema } from '../inputTypeSchemas/PrioritiesToTasksWhereUniqueInputSchema'
import { PrioritiesToTasksScalarFieldEnumSchema } from '../inputTypeSchemas/PrioritiesToTasksScalarFieldEnumSchema'
import { PriorityArgsSchema } from "../outputTypeSchemas/PriorityArgsSchema"
import { TaskArgsSchema } from "../outputTypeSchemas/TaskArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PrioritiesToTasksSelectSchema: z.ZodType<Prisma.PrioritiesToTasksSelect> = z.object({
  priorityId: z.boolean().optional(),
  taskId: z.boolean().optional(),
  notes: z.boolean().optional(),
  priority: z.union([z.boolean(),z.lazy(() => PriorityArgsSchema)]).optional(),
  task: z.union([z.boolean(),z.lazy(() => TaskArgsSchema)]).optional(),
}).strict()

export const PrioritiesToTasksFindManyArgsSchema: z.ZodType<Prisma.PrioritiesToTasksFindManyArgs> = z.object({
  select: PrioritiesToTasksSelectSchema.optional(),
  include: PrioritiesToTasksIncludeSchema.optional(),
  where: PrioritiesToTasksWhereInputSchema.optional(),
  orderBy: z.union([ PrioritiesToTasksOrderByWithRelationInputSchema.array(),PrioritiesToTasksOrderByWithRelationInputSchema ]).optional(),
  cursor: PrioritiesToTasksWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PrioritiesToTasksScalarFieldEnumSchema,PrioritiesToTasksScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default PrioritiesToTasksFindManyArgsSchema;
