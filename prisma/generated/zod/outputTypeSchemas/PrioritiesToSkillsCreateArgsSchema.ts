import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToSkillsIncludeSchema } from '../inputTypeSchemas/PrioritiesToSkillsIncludeSchema'
import { PrioritiesToSkillsCreateInputSchema } from '../inputTypeSchemas/PrioritiesToSkillsCreateInputSchema'
import { PrioritiesToSkillsUncheckedCreateInputSchema } from '../inputTypeSchemas/PrioritiesToSkillsUncheckedCreateInputSchema'
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

export const PrioritiesToSkillsCreateArgsSchema: z.ZodType<Prisma.PrioritiesToSkillsCreateArgs> = z.object({
  select: PrioritiesToSkillsSelectSchema.optional(),
  include: PrioritiesToSkillsIncludeSchema.optional(),
  data: z.union([ PrioritiesToSkillsCreateInputSchema,PrioritiesToSkillsUncheckedCreateInputSchema ]),
}).strict()

export default PrioritiesToSkillsCreateArgsSchema;
