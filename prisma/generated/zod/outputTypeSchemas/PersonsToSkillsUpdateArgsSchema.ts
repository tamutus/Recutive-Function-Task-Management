import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToSkillsIncludeSchema } from '../inputTypeSchemas/PersonsToSkillsIncludeSchema'
import { PersonsToSkillsUpdateInputSchema } from '../inputTypeSchemas/PersonsToSkillsUpdateInputSchema'
import { PersonsToSkillsUncheckedUpdateInputSchema } from '../inputTypeSchemas/PersonsToSkillsUncheckedUpdateInputSchema'
import { PersonsToSkillsWhereUniqueInputSchema } from '../inputTypeSchemas/PersonsToSkillsWhereUniqueInputSchema'
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

export const PersonsToSkillsUpdateArgsSchema: z.ZodType<Prisma.PersonsToSkillsUpdateArgs> = z.object({
  select: PersonsToSkillsSelectSchema.optional(),
  include: PersonsToSkillsIncludeSchema.optional(),
  data: z.union([ PersonsToSkillsUpdateInputSchema,PersonsToSkillsUncheckedUpdateInputSchema ]),
  where: PersonsToSkillsWhereUniqueInputSchema,
}).strict()

export default PersonsToSkillsUpdateArgsSchema;
