import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToSkillsIncludeSchema } from '../inputTypeSchemas/PrioritiesToSkillsIncludeSchema'
import { PrioritiesToSkillsWhereUniqueInputSchema } from '../inputTypeSchemas/PrioritiesToSkillsWhereUniqueInputSchema'
import { PrioritiesToSkillsCreateInputSchema } from '../inputTypeSchemas/PrioritiesToSkillsCreateInputSchema'
import { PrioritiesToSkillsUncheckedCreateInputSchema } from '../inputTypeSchemas/PrioritiesToSkillsUncheckedCreateInputSchema'
import { PrioritiesToSkillsUpdateInputSchema } from '../inputTypeSchemas/PrioritiesToSkillsUpdateInputSchema'
import { PrioritiesToSkillsUncheckedUpdateInputSchema } from '../inputTypeSchemas/PrioritiesToSkillsUncheckedUpdateInputSchema'
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

export const PrioritiesToSkillsUpsertArgsSchema: z.ZodType<Prisma.PrioritiesToSkillsUpsertArgs> = z.object({
  select: PrioritiesToSkillsSelectSchema.optional(),
  include: PrioritiesToSkillsIncludeSchema.optional(),
  where: PrioritiesToSkillsWhereUniqueInputSchema,
  create: z.union([ PrioritiesToSkillsCreateInputSchema,PrioritiesToSkillsUncheckedCreateInputSchema ]),
  update: z.union([ PrioritiesToSkillsUpdateInputSchema,PrioritiesToSkillsUncheckedUpdateInputSchema ]),
}).strict()

export default PrioritiesToSkillsUpsertArgsSchema;
