import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillsToTagsIncludeSchema } from '../inputTypeSchemas/SkillsToTagsIncludeSchema'
import { SkillsToTagsWhereInputSchema } from '../inputTypeSchemas/SkillsToTagsWhereInputSchema'
import { SkillsToTagsOrderByWithRelationInputSchema } from '../inputTypeSchemas/SkillsToTagsOrderByWithRelationInputSchema'
import { SkillsToTagsWhereUniqueInputSchema } from '../inputTypeSchemas/SkillsToTagsWhereUniqueInputSchema'
import { SkillsToTagsScalarFieldEnumSchema } from '../inputTypeSchemas/SkillsToTagsScalarFieldEnumSchema'
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

export const SkillsToTagsFindFirstArgsSchema: z.ZodType<Prisma.SkillsToTagsFindFirstArgs> = z.object({
  select: SkillsToTagsSelectSchema.optional(),
  include: SkillsToTagsIncludeSchema.optional(),
  where: SkillsToTagsWhereInputSchema.optional(),
  orderBy: z.union([ SkillsToTagsOrderByWithRelationInputSchema.array(),SkillsToTagsOrderByWithRelationInputSchema ]).optional(),
  cursor: SkillsToTagsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SkillsToTagsScalarFieldEnumSchema,SkillsToTagsScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default SkillsToTagsFindFirstArgsSchema;
