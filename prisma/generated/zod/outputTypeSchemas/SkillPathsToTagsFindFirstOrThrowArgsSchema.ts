import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillPathsToTagsIncludeSchema } from '../inputTypeSchemas/SkillPathsToTagsIncludeSchema'
import { SkillPathsToTagsWhereInputSchema } from '../inputTypeSchemas/SkillPathsToTagsWhereInputSchema'
import { SkillPathsToTagsOrderByWithRelationInputSchema } from '../inputTypeSchemas/SkillPathsToTagsOrderByWithRelationInputSchema'
import { SkillPathsToTagsWhereUniqueInputSchema } from '../inputTypeSchemas/SkillPathsToTagsWhereUniqueInputSchema'
import { SkillPathsToTagsScalarFieldEnumSchema } from '../inputTypeSchemas/SkillPathsToTagsScalarFieldEnumSchema'
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

export const SkillPathsToTagsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SkillPathsToTagsFindFirstOrThrowArgs> = z.object({
  select: SkillPathsToTagsSelectSchema.optional(),
  include: SkillPathsToTagsIncludeSchema.optional(),
  where: SkillPathsToTagsWhereInputSchema.optional(),
  orderBy: z.union([ SkillPathsToTagsOrderByWithRelationInputSchema.array(),SkillPathsToTagsOrderByWithRelationInputSchema ]).optional(),
  cursor: SkillPathsToTagsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SkillPathsToTagsScalarFieldEnumSchema,SkillPathsToTagsScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default SkillPathsToTagsFindFirstOrThrowArgsSchema;
