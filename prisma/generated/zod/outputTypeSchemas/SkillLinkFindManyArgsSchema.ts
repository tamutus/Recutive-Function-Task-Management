import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillLinkIncludeSchema } from '../inputTypeSchemas/SkillLinkIncludeSchema'
import { SkillLinkWhereInputSchema } from '../inputTypeSchemas/SkillLinkWhereInputSchema'
import { SkillLinkOrderByWithRelationInputSchema } from '../inputTypeSchemas/SkillLinkOrderByWithRelationInputSchema'
import { SkillLinkWhereUniqueInputSchema } from '../inputTypeSchemas/SkillLinkWhereUniqueInputSchema'
import { SkillLinkScalarFieldEnumSchema } from '../inputTypeSchemas/SkillLinkScalarFieldEnumSchema'
import { SkillArgsSchema } from "../outputTypeSchemas/SkillArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SkillLinkSelectSchema: z.ZodType<Prisma.SkillLinkSelect> = z.object({
  precursorId: z.boolean().optional(),
  successorId: z.boolean().optional(),
  info: z.boolean().optional(),
  hourGate: z.boolean().optional(),
  precursor: z.union([z.boolean(),z.lazy(() => SkillArgsSchema)]).optional(),
  successor: z.union([z.boolean(),z.lazy(() => SkillArgsSchema)]).optional(),
}).strict()

export const SkillLinkFindManyArgsSchema: z.ZodType<Prisma.SkillLinkFindManyArgs> = z.object({
  select: SkillLinkSelectSchema.optional(),
  include: SkillLinkIncludeSchema.optional(),
  where: SkillLinkWhereInputSchema.optional(),
  orderBy: z.union([ SkillLinkOrderByWithRelationInputSchema.array(),SkillLinkOrderByWithRelationInputSchema ]).optional(),
  cursor: SkillLinkWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SkillLinkScalarFieldEnumSchema,SkillLinkScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default SkillLinkFindManyArgsSchema;
