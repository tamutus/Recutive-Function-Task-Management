import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillsToTagsIncludeSchema } from '../inputTypeSchemas/SkillsToTagsIncludeSchema'
import { SkillsToTagsWhereUniqueInputSchema } from '../inputTypeSchemas/SkillsToTagsWhereUniqueInputSchema'
import { SkillsToTagsCreateInputSchema } from '../inputTypeSchemas/SkillsToTagsCreateInputSchema'
import { SkillsToTagsUncheckedCreateInputSchema } from '../inputTypeSchemas/SkillsToTagsUncheckedCreateInputSchema'
import { SkillsToTagsUpdateInputSchema } from '../inputTypeSchemas/SkillsToTagsUpdateInputSchema'
import { SkillsToTagsUncheckedUpdateInputSchema } from '../inputTypeSchemas/SkillsToTagsUncheckedUpdateInputSchema'
import { SkillArgsSchema } from "../outputTypeSchemas/SkillArgsSchema"
import { TagArgsSchema } from "../outputTypeSchemas/TagArgsSchema"
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SkillsToTagsSelectSchema: z.ZodType<Prisma.SkillsToTagsSelect> = z.object({
  skillId: z.boolean().optional(),
  tagId: z.boolean().optional(),
  taggerId: z.boolean().optional(),
  skill: z.union([z.boolean(),z.lazy(() => SkillArgsSchema)]).optional(),
  tag: z.union([z.boolean(),z.lazy(() => TagArgsSchema)]).optional(),
  tagger: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
}).strict()

export const SkillsToTagsUpsertArgsSchema: z.ZodType<Prisma.SkillsToTagsUpsertArgs> = z.object({
  select: SkillsToTagsSelectSchema.optional(),
  include: SkillsToTagsIncludeSchema.optional(),
  where: SkillsToTagsWhereUniqueInputSchema,
  create: z.union([ SkillsToTagsCreateInputSchema,SkillsToTagsUncheckedCreateInputSchema ]),
  update: z.union([ SkillsToTagsUpdateInputSchema,SkillsToTagsUncheckedUpdateInputSchema ]),
}).strict()

export default SkillsToTagsUpsertArgsSchema;
