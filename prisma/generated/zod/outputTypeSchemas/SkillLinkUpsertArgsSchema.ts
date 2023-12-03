import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillLinkIncludeSchema } from '../inputTypeSchemas/SkillLinkIncludeSchema'
import { SkillLinkWhereUniqueInputSchema } from '../inputTypeSchemas/SkillLinkWhereUniqueInputSchema'
import { SkillLinkCreateInputSchema } from '../inputTypeSchemas/SkillLinkCreateInputSchema'
import { SkillLinkUncheckedCreateInputSchema } from '../inputTypeSchemas/SkillLinkUncheckedCreateInputSchema'
import { SkillLinkUpdateInputSchema } from '../inputTypeSchemas/SkillLinkUpdateInputSchema'
import { SkillLinkUncheckedUpdateInputSchema } from '../inputTypeSchemas/SkillLinkUncheckedUpdateInputSchema'
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

export const SkillLinkUpsertArgsSchema: z.ZodType<Prisma.SkillLinkUpsertArgs> = z.object({
  select: SkillLinkSelectSchema.optional(),
  include: SkillLinkIncludeSchema.optional(),
  where: SkillLinkWhereUniqueInputSchema,
  create: z.union([ SkillLinkCreateInputSchema,SkillLinkUncheckedCreateInputSchema ]),
  update: z.union([ SkillLinkUpdateInputSchema,SkillLinkUncheckedUpdateInputSchema ]),
}).strict()

export default SkillLinkUpsertArgsSchema;
