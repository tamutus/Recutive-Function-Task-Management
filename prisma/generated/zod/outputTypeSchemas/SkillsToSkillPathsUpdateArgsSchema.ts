import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillsToSkillPathsIncludeSchema } from '../inputTypeSchemas/SkillsToSkillPathsIncludeSchema'
import { SkillsToSkillPathsUpdateInputSchema } from '../inputTypeSchemas/SkillsToSkillPathsUpdateInputSchema'
import { SkillsToSkillPathsUncheckedUpdateInputSchema } from '../inputTypeSchemas/SkillsToSkillPathsUncheckedUpdateInputSchema'
import { SkillsToSkillPathsWhereUniqueInputSchema } from '../inputTypeSchemas/SkillsToSkillPathsWhereUniqueInputSchema'
import { SkillArgsSchema } from "../outputTypeSchemas/SkillArgsSchema"
import { SkillPathArgsSchema } from "../outputTypeSchemas/SkillPathArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SkillsToSkillPathsSelectSchema: z.ZodType<Prisma.SkillsToSkillPathsSelect> = z.object({
  skillId: z.boolean().optional(),
  skillPathId: z.boolean().optional(),
  skill: z.union([z.boolean(),z.lazy(() => SkillArgsSchema)]).optional(),
  skillPath: z.union([z.boolean(),z.lazy(() => SkillPathArgsSchema)]).optional(),
}).strict()

export const SkillsToSkillPathsUpdateArgsSchema: z.ZodType<Prisma.SkillsToSkillPathsUpdateArgs> = z.object({
  select: SkillsToSkillPathsSelectSchema.optional(),
  include: SkillsToSkillPathsIncludeSchema.optional(),
  data: z.union([ SkillsToSkillPathsUpdateInputSchema,SkillsToSkillPathsUncheckedUpdateInputSchema ]),
  where: SkillsToSkillPathsWhereUniqueInputSchema,
}).strict()

export default SkillsToSkillPathsUpdateArgsSchema;
