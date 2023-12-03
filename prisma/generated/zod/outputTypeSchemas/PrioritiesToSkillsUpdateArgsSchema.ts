import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToSkillsIncludeSchema } from '../inputTypeSchemas/PrioritiesToSkillsIncludeSchema'
import { PrioritiesToSkillsUpdateInputSchema } from '../inputTypeSchemas/PrioritiesToSkillsUpdateInputSchema'
import { PrioritiesToSkillsUncheckedUpdateInputSchema } from '../inputTypeSchemas/PrioritiesToSkillsUncheckedUpdateInputSchema'
import { PrioritiesToSkillsWhereUniqueInputSchema } from '../inputTypeSchemas/PrioritiesToSkillsWhereUniqueInputSchema'
import { PriorityArgsSchema } from "../outputTypeSchemas/PriorityArgsSchema"
import { SkillArgsSchema } from "../outputTypeSchemas/SkillArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PrioritiesToSkillsSelectSchema: z.ZodType<Prisma.PrioritiesToSkillsSelect> = z.object({
  priorityId: z.boolean().optional(),
  skillId: z.boolean().optional(),
  notes: z.boolean().optional(),
  priority: z.union([z.boolean(),z.lazy(() => PriorityArgsSchema)]).optional(),
  skill: z.union([z.boolean(),z.lazy(() => SkillArgsSchema)]).optional(),
}).strict()

export const PrioritiesToSkillsUpdateArgsSchema: z.ZodType<Prisma.PrioritiesToSkillsUpdateArgs> = z.object({
  select: PrioritiesToSkillsSelectSchema.optional(),
  include: PrioritiesToSkillsIncludeSchema.optional(),
  data: z.union([ PrioritiesToSkillsUpdateInputSchema,PrioritiesToSkillsUncheckedUpdateInputSchema ]),
  where: PrioritiesToSkillsWhereUniqueInputSchema,
}).strict()

export default PrioritiesToSkillsUpdateArgsSchema;
