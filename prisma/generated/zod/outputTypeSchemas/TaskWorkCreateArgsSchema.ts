import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskWorkIncludeSchema } from '../inputTypeSchemas/TaskWorkIncludeSchema'
import { TaskWorkCreateInputSchema } from '../inputTypeSchemas/TaskWorkCreateInputSchema'
import { TaskWorkUncheckedCreateInputSchema } from '../inputTypeSchemas/TaskWorkUncheckedCreateInputSchema'
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

export const TaskWorkCreateArgsSchema: z.ZodType<Prisma.TaskWorkCreateArgs> = z.object({
  select: TaskWorkSelectSchema.optional(),
  include: TaskWorkIncludeSchema.optional(),
  data: z.union([ TaskWorkCreateInputSchema,TaskWorkUncheckedCreateInputSchema ]),
}).strict()

export default TaskWorkCreateArgsSchema;
