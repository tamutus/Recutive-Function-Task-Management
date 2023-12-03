import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillsToSkillPathsIncludeSchema } from '../inputTypeSchemas/SkillsToSkillPathsIncludeSchema'
import { SkillsToSkillPathsWhereInputSchema } from '../inputTypeSchemas/SkillsToSkillPathsWhereInputSchema'
import { SkillsToSkillPathsOrderByWithRelationInputSchema } from '../inputTypeSchemas/SkillsToSkillPathsOrderByWithRelationInputSchema'
import { SkillsToSkillPathsWhereUniqueInputSchema } from '../inputTypeSchemas/SkillsToSkillPathsWhereUniqueInputSchema'
import { SkillsToSkillPathsScalarFieldEnumSchema } from '../inputTypeSchemas/SkillsToSkillPathsScalarFieldEnumSchema'
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

export const SkillsToSkillPathsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SkillsToSkillPathsFindFirstOrThrowArgs> = z.object({
  select: SkillsToSkillPathsSelectSchema.optional(),
  include: SkillsToSkillPathsIncludeSchema.optional(),
  where: SkillsToSkillPathsWhereInputSchema.optional(),
  orderBy: z.union([ SkillsToSkillPathsOrderByWithRelationInputSchema.array(),SkillsToSkillPathsOrderByWithRelationInputSchema ]).optional(),
  cursor: SkillsToSkillPathsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SkillsToSkillPathsScalarFieldEnumSchema,SkillsToSkillPathsScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default SkillsToSkillPathsFindFirstOrThrowArgsSchema;
