import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillPathsToTagsIncludeSchema } from '../inputTypeSchemas/SkillPathsToTagsIncludeSchema'
import { SkillPathsToTagsCreateInputSchema } from '../inputTypeSchemas/SkillPathsToTagsCreateInputSchema'
import { SkillPathsToTagsUncheckedCreateInputSchema } from '../inputTypeSchemas/SkillPathsToTagsUncheckedCreateInputSchema'
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

export const SkillPathsToTagsCreateArgsSchema: z.ZodType<Prisma.SkillPathsToTagsCreateArgs> = z.object({
  select: SkillPathsToTagsSelectSchema.optional(),
  include: SkillPathsToTagsIncludeSchema.optional(),
  data: z.union([ SkillPathsToTagsCreateInputSchema,SkillPathsToTagsUncheckedCreateInputSchema ]),
}).strict()

export default SkillPathsToTagsCreateArgsSchema;
