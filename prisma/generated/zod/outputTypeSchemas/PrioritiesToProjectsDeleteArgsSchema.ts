import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToProjectsIncludeSchema } from '../inputTypeSchemas/PrioritiesToProjectsIncludeSchema'
import { PrioritiesToProjectsWhereUniqueInputSchema } from '../inputTypeSchemas/PrioritiesToProjectsWhereUniqueInputSchema'
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

export const PrioritiesToProjectsDeleteArgsSchema: z.ZodType<Prisma.PrioritiesToProjectsDeleteArgs> = z.object({
  select: PrioritiesToProjectsSelectSchema.optional(),
  include: PrioritiesToProjectsIncludeSchema.optional(),
  where: PrioritiesToProjectsWhereUniqueInputSchema,
}).strict()

export default PrioritiesToProjectsDeleteArgsSchema;
