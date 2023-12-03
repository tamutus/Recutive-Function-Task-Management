import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToProjectsIncludeSchema } from '../inputTypeSchemas/PrioritiesToProjectsIncludeSchema'
import { PrioritiesToProjectsCreateInputSchema } from '../inputTypeSchemas/PrioritiesToProjectsCreateInputSchema'
import { PrioritiesToProjectsUncheckedCreateInputSchema } from '../inputTypeSchemas/PrioritiesToProjectsUncheckedCreateInputSchema'
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"
import { PriorityArgsSchema } from "../outputTypeSchemas/PriorityArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PrioritiesToProjectsSelectSchema: z.ZodType<Prisma.PrioritiesToProjectsSelect> = z.object({
  projectId: z.boolean().optional(),
  priorityId: z.boolean().optional(),
  notes: z.boolean().optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
  priority: z.union([z.boolean(),z.lazy(() => PriorityArgsSchema)]).optional(),
}).strict()

export const PrioritiesToProjectsCreateArgsSchema: z.ZodType<Prisma.PrioritiesToProjectsCreateArgs> = z.object({
  select: PrioritiesToProjectsSelectSchema.optional(),
  include: PrioritiesToProjectsIncludeSchema.optional(),
  data: z.union([ PrioritiesToProjectsCreateInputSchema,PrioritiesToProjectsUncheckedCreateInputSchema ]),
}).strict()

export default PrioritiesToProjectsCreateArgsSchema;
