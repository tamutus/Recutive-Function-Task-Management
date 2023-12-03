import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillPathsToTagsIncludeSchema } from '../inputTypeSchemas/SkillPathsToTagsIncludeSchema'
import { SkillPathsToTagsUpdateInputSchema } from '../inputTypeSchemas/SkillPathsToTagsUpdateInputSchema'
import { SkillPathsToTagsUncheckedUpdateInputSchema } from '../inputTypeSchemas/SkillPathsToTagsUncheckedUpdateInputSchema'
import { SkillPathsToTagsWhereUniqueInputSchema } from '../inputTypeSchemas/SkillPathsToTagsWhereUniqueInputSchema'
import { SkillPathArgsSchema } from "../outputTypeSchemas/SkillPathArgsSchema"
import { TagArgsSchema } from "../outputTypeSchemas/TagArgsSchema"
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SkillPathsToTagsSelectSchema: z.ZodType<Prisma.SkillPathsToTagsSelect> = z.object({
  skillId: z.boolean().optional(),
  tagId: z.boolean().optional(),
  taggerId: z.boolean().optional(),
  skill: z.union([z.boolean(),z.lazy(() => SkillPathArgsSchema)]).optional(),
  tag: z.union([z.boolean(),z.lazy(() => TagArgsSchema)]).optional(),
  tagger: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
}).strict()

export const SkillPathsToTagsUpdateArgsSchema: z.ZodType<Prisma.SkillPathsToTagsUpdateArgs> = z.object({
  select: SkillPathsToTagsSelectSchema.optional(),
  include: SkillPathsToTagsIncludeSchema.optional(),
  data: z.union([ SkillPathsToTagsUpdateInputSchema,SkillPathsToTagsUncheckedUpdateInputSchema ]),
  where: SkillPathsToTagsWhereUniqueInputSchema,
}).strict()

export default SkillPathsToTagsUpdateArgsSchema;
