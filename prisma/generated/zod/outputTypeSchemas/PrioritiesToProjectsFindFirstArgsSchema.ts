import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToProjectsIncludeSchema } from '../inputTypeSchemas/PrioritiesToProjectsIncludeSchema'
import { PrioritiesToProjectsWhereInputSchema } from '../inputTypeSchemas/PrioritiesToProjectsWhereInputSchema'
import { PrioritiesToProjectsOrderByWithRelationInputSchema } from '../inputTypeSchemas/PrioritiesToProjectsOrderByWithRelationInputSchema'
import { PrioritiesToProjectsWhereUniqueInputSchema } from '../inputTypeSchemas/PrioritiesToProjectsWhereUniqueInputSchema'
import { PrioritiesToProjectsScalarFieldEnumSchema } from '../inputTypeSchemas/PrioritiesToProjectsScalarFieldEnumSchema'
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

export const PrioritiesToProjectsFindFirstArgsSchema: z.ZodType<Prisma.PrioritiesToProjectsFindFirstArgs> = z.object({
  select: PrioritiesToProjectsSelectSchema.optional(),
  include: PrioritiesToProjectsIncludeSchema.optional(),
  where: PrioritiesToProjectsWhereInputSchema.optional(),
  orderBy: z.union([ PrioritiesToProjectsOrderByWithRelationInputSchema.array(),PrioritiesToProjectsOrderByWithRelationInputSchema ]).optional(),
  cursor: PrioritiesToProjectsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PrioritiesToProjectsScalarFieldEnumSchema,PrioritiesToProjectsScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default PrioritiesToProjectsFindFirstArgsSchema;
