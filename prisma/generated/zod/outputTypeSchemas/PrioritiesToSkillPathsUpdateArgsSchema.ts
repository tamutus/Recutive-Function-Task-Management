import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToSkillPathsIncludeSchema } from '../inputTypeSchemas/PrioritiesToSkillPathsIncludeSchema'
import { PrioritiesToSkillPathsUpdateInputSchema } from '../inputTypeSchemas/PrioritiesToSkillPathsUpdateInputSchema'
import { PrioritiesToSkillPathsUncheckedUpdateInputSchema } from '../inputTypeSchemas/PrioritiesToSkillPathsUncheckedUpdateInputSchema'
import { PrioritiesToSkillPathsWhereUniqueInputSchema } from '../inputTypeSchemas/PrioritiesToSkillPathsWhereUniqueInputSchema'
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

export const PrioritiesToSkillPathsUpdateArgsSchema: z.ZodType<Prisma.PrioritiesToSkillPathsUpdateArgs> = z.object({
  select: PrioritiesToSkillPathsSelectSchema.optional(),
  include: PrioritiesToSkillPathsIncludeSchema.optional(),
  data: z.union([ PrioritiesToSkillPathsUpdateInputSchema,PrioritiesToSkillPathsUncheckedUpdateInputSchema ]),
  where: PrioritiesToSkillPathsWhereUniqueInputSchema,
}).strict()

export default PrioritiesToSkillPathsUpdateArgsSchema;
