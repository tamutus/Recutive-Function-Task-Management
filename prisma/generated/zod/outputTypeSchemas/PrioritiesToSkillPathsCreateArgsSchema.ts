import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToSkillPathsIncludeSchema } from '../inputTypeSchemas/PrioritiesToSkillPathsIncludeSchema'
import { PrioritiesToSkillPathsCreateInputSchema } from '../inputTypeSchemas/PrioritiesToSkillPathsCreateInputSchema'
import { PrioritiesToSkillPathsUncheckedCreateInputSchema } from '../inputTypeSchemas/PrioritiesToSkillPathsUncheckedCreateInputSchema'
import { SkillPathArgsSchema } from "../outputTypeSchemas/SkillPathArgsSchema"
import { PriorityArgsSchema } from "../outputTypeSchemas/PriorityArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PrioritiesToSkillPathsSelectSchema: z.ZodType<Prisma.PrioritiesToSkillPathsSelect> = z.object({
  skillPathId: z.boolean().optional(),
  priorityId: z.boolean().optional(),
  notes: z.boolean().optional(),
  skillPath: z.union([z.boolean(),z.lazy(() => SkillPathArgsSchema)]).optional(),
  priority: z.union([z.boolean(),z.lazy(() => PriorityArgsSchema)]).optional(),
}).strict()

export const PrioritiesToSkillPathsCreateArgsSchema: z.ZodType<Prisma.PrioritiesToSkillPathsCreateArgs> = z.object({
  select: PrioritiesToSkillPathsSelectSchema.optional(),
  include: PrioritiesToSkillPathsIncludeSchema.optional(),
  data: z.union([ PrioritiesToSkillPathsCreateInputSchema,PrioritiesToSkillPathsUncheckedCreateInputSchema ]),
}).strict()

export default PrioritiesToSkillPathsCreateArgsSchema;
