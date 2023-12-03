import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToTasksIncludeSchema } from '../inputTypeSchemas/PrioritiesToTasksIncludeSchema'
import { PrioritiesToTasksCreateInputSchema } from '../inputTypeSchemas/PrioritiesToTasksCreateInputSchema'
import { PrioritiesToTasksUncheckedCreateInputSchema } from '../inputTypeSchemas/PrioritiesToTasksUncheckedCreateInputSchema'
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

export const PrioritiesToTasksCreateArgsSchema: z.ZodType<Prisma.PrioritiesToTasksCreateArgs> = z.object({
  select: PrioritiesToTasksSelectSchema.optional(),
  include: PrioritiesToTasksIncludeSchema.optional(),
  data: z.union([ PrioritiesToTasksCreateInputSchema,PrioritiesToTasksUncheckedCreateInputSchema ]),
}).strict()

export default PrioritiesToTasksCreateArgsSchema;
