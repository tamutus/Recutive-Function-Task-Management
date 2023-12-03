import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToSkillPathsIncludeSchema } from '../inputTypeSchemas/PersonsToSkillPathsIncludeSchema'
import { PersonsToSkillPathsWhereInputSchema } from '../inputTypeSchemas/PersonsToSkillPathsWhereInputSchema'
import { PersonsToSkillPathsOrderByWithRelationInputSchema } from '../inputTypeSchemas/PersonsToSkillPathsOrderByWithRelationInputSchema'
import { PersonsToSkillPathsWhereUniqueInputSchema } from '../inputTypeSchemas/PersonsToSkillPathsWhereUniqueInputSchema'
import { PersonsToSkillPathsScalarFieldEnumSchema } from '../inputTypeSchemas/PersonsToSkillPathsScalarFieldEnumSchema'
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"
import { SkillPathArgsSchema } from "../outputTypeSchemas/SkillPathArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PersonsToSkillPathsSelectSchema: z.ZodType<Prisma.PersonsToSkillPathsSelect> = z.object({
  personId: z.boolean().optional(),
  skillId: z.boolean().optional(),
  notes: z.boolean().optional(),
  person: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
  skillPath: z.union([z.boolean(),z.lazy(() => SkillPathArgsSchema)]).optional(),
}).strict()

export const PersonsToSkillPathsFindManyArgsSchema: z.ZodType<Prisma.PersonsToSkillPathsFindManyArgs> = z.object({
  select: PersonsToSkillPathsSelectSchema.optional(),
  include: PersonsToSkillPathsIncludeSchema.optional(),
  where: PersonsToSkillPathsWhereInputSchema.optional(),
  orderBy: z.union([ PersonsToSkillPathsOrderByWithRelationInputSchema.array(),PersonsToSkillPathsOrderByWithRelationInputSchema ]).optional(),
  cursor: PersonsToSkillPathsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PersonsToSkillPathsScalarFieldEnumSchema,PersonsToSkillPathsScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default PersonsToSkillPathsFindManyArgsSchema;
