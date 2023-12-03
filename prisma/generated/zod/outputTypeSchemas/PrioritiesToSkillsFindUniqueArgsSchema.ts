import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToSkillsIncludeSchema } from '../inputTypeSchemas/PrioritiesToSkillsIncludeSchema'
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

export const PrioritiesToSkillsFindUniqueArgsSchema: z.ZodType<Prisma.PrioritiesToSkillsFindUniqueArgs> = z.object({
  select: PrioritiesToSkillsSelectSchema.optional(),
  include: PrioritiesToSkillsIncludeSchema.optional(),
  where: PrioritiesToSkillsWhereUniqueInputSchema,
}).strict()

export default PrioritiesToSkillsFindUniqueArgsSchema;
