import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskWorkIncludeSchema } from '../inputTypeSchemas/TaskWorkIncludeSchema'
import { TaskWorkWhereInputSchema } from '../inputTypeSchemas/TaskWorkWhereInputSchema'
import { TaskWorkOrderByWithRelationInputSchema } from '../inputTypeSchemas/TaskWorkOrderByWithRelationInputSchema'
import { TaskWorkWhereUniqueInputSchema } from '../inputTypeSchemas/TaskWorkWhereUniqueInputSchema'
import { TaskWorkScalarFieldEnumSchema } from '../inputTypeSchemas/TaskWorkScalarFieldEnumSchema'
import { TaskArgsSchema } from "../outputTypeSchemas/TaskArgsSchema"
import { EnergiesToTaskWorksFindManyArgsSchema } from "../outputTypeSchemas/EnergiesToTaskWorksFindManyArgsSchema"
import { PrivateEnergiesToTaskWorksFindManyArgsSchema } from "../outputTypeSchemas/PrivateEnergiesToTaskWorksFindManyArgsSchema"
import { TaskWorkCountOutputTypeArgsSchema } from "../outputTypeSchemas/TaskWorkCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TaskWorkSelectSchema: z.ZodType<Prisma.TaskWorkSelect> = z.object({
  id: z.boolean().optional(),
  taskId: z.boolean().optional(),
  notes: z.boolean().optional(),
  startedAt: z.boolean().optional(),
  endedAt: z.boolean().optional(),
  task: z.union([z.boolean(),z.lazy(() => TaskArgsSchema)]).optional(),
  energyChanges: z.union([z.boolean(),z.lazy(() => EnergiesToTaskWorksFindManyArgsSchema)]).optional(),
  privateEnergyChanges: z.union([z.boolean(),z.lazy(() => PrivateEnergiesToTaskWorksFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TaskWorkCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const TaskWorkFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TaskWorkFindFirstOrThrowArgs> = z.object({
  select: TaskWorkSelectSchema.optional(),
  include: TaskWorkIncludeSchema.optional(),
  where: TaskWorkWhereInputSchema.optional(),
  orderBy: z.union([ TaskWorkOrderByWithRelationInputSchema.array(),TaskWorkOrderByWithRelationInputSchema ]).optional(),
  cursor: TaskWorkWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TaskWorkScalarFieldEnumSchema,TaskWorkScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default TaskWorkFindFirstOrThrowArgsSchema;
