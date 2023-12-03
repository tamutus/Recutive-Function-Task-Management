import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToTasksIncludeSchema } from '../inputTypeSchemas/PrioritiesToTasksIncludeSchema'
import { PrioritiesToTasksWhereUniqueInputSchema } from '../inputTypeSchemas/PrioritiesToTasksWhereUniqueInputSchema'
import { PrioritiesToTasksCreateInputSchema } from '../inputTypeSchemas/PrioritiesToTasksCreateInputSchema'
import { PrioritiesToTasksUncheckedCreateInputSchema } from '../inputTypeSchemas/PrioritiesToTasksUncheckedCreateInputSchema'
import { PrioritiesToTasksUpdateInputSchema } from '../inputTypeSchemas/PrioritiesToTasksUpdateInputSchema'
import { PrioritiesToTasksUncheckedUpdateInputSchema } from '../inputTypeSchemas/PrioritiesToTasksUncheckedUpdateInputSchema'
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

export const PrioritiesToTasksUpsertArgsSchema: z.ZodType<Prisma.PrioritiesToTasksUpsertArgs> = z.object({
  select: PrioritiesToTasksSelectSchema.optional(),
  include: PrioritiesToTasksIncludeSchema.optional(),
  where: PrioritiesToTasksWhereUniqueInputSchema,
  create: z.union([ PrioritiesToTasksCreateInputSchema,PrioritiesToTasksUncheckedCreateInputSchema ]),
  update: z.union([ PrioritiesToTasksUpdateInputSchema,PrioritiesToTasksUncheckedUpdateInputSchema ]),
}).strict()

export default PrioritiesToTasksUpsertArgsSchema;
