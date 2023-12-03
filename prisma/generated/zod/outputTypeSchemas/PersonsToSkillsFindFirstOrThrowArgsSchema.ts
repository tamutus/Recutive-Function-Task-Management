import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToSkillsIncludeSchema } from '../inputTypeSchemas/PersonsToSkillsIncludeSchema'
import { PersonsToSkillsWhereInputSchema } from '../inputTypeSchemas/PersonsToSkillsWhereInputSchema'
import { PersonsToSkillsOrderByWithRelationInputSchema } from '../inputTypeSchemas/PersonsToSkillsOrderByWithRelationInputSchema'
import { PersonsToSkillsWhereUniqueInputSchema } from '../inputTypeSchemas/PersonsToSkillsWhereUniqueInputSchema'
import { PersonsToSkillsScalarFieldEnumSchema } from '../inputTypeSchemas/PersonsToSkillsScalarFieldEnumSchema'
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"
import { SkillArgsSchema } from "../outputTypeSchemas/SkillArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PersonsToSkillsSelectSchema: z.ZodType<Prisma.PersonsToSkillsSelect> = z.object({
  personId: z.boolean().optional(),
  skillId: z.boolean().optional(),
  person: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
  skill: z.union([z.boolean(),z.lazy(() => SkillArgsSchema)]).optional(),
}).strict()

export const PersonsToSkillsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PersonsToSkillsFindFirstOrThrowArgs> = z.object({
  select: PersonsToSkillsSelectSchema.optional(),
  include: PersonsToSkillsIncludeSchema.optional(),
  where: PersonsToSkillsWhereInputSchema.optional(),
  orderBy: z.union([ PersonsToSkillsOrderByWithRelationInputSchema.array(),PersonsToSkillsOrderByWithRelationInputSchema ]).optional(),
  cursor: PersonsToSkillsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PersonsToSkillsScalarFieldEnumSchema,PersonsToSkillsScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default PersonsToSkillsFindFirstOrThrowArgsSchema;
