import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskWorkIncludeSchema } from '../inputTypeSchemas/TaskWorkIncludeSchema'
import { TaskWorkWhereUniqueInputSchema } from '../inputTypeSchemas/TaskWorkWhereUniqueInputSchema'
import { TaskWorkCreateInputSchema } from '../inputTypeSchemas/TaskWorkCreateInputSchema'
import { TaskWorkUncheckedCreateInputSchema } from '../inputTypeSchemas/TaskWorkUncheckedCreateInputSchema'
import { TaskWorkUpdateInputSchema } from '../inputTypeSchemas/TaskWorkUpdateInputSchema'
import { TaskWorkUncheckedUpdateInputSchema } from '../inputTypeSchemas/TaskWorkUncheckedUpdateInputSchema'
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

export const TaskWorkUpsertArgsSchema: z.ZodType<Prisma.TaskWorkUpsertArgs> = z.object({
  select: TaskWorkSelectSchema.optional(),
  include: TaskWorkIncludeSchema.optional(),
  where: TaskWorkWhereUniqueInputSchema,
  create: z.union([ TaskWorkCreateInputSchema,TaskWorkUncheckedCreateInputSchema ]),
  update: z.union([ TaskWorkUpdateInputSchema,TaskWorkUncheckedUpdateInputSchema ]),
}).strict()

export default TaskWorkUpsertArgsSchema;
