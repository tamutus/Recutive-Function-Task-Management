import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToSkillPathsIncludeSchema } from '../inputTypeSchemas/PersonsToSkillPathsIncludeSchema'
import { PersonsToSkillPathsUpdateInputSchema } from '../inputTypeSchemas/PersonsToSkillPathsUpdateInputSchema'
import { PersonsToSkillPathsUncheckedUpdateInputSchema } from '../inputTypeSchemas/PersonsToSkillPathsUncheckedUpdateInputSchema'
import { PersonsToSkillPathsWhereUniqueInputSchema } from '../inputTypeSchemas/PersonsToSkillPathsWhereUniqueInputSchema'
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

export const PersonsToSkillPathsUpdateArgsSchema: z.ZodType<Prisma.PersonsToSkillPathsUpdateArgs> = z.object({
  select: PersonsToSkillPathsSelectSchema.optional(),
  include: PersonsToSkillPathsIncludeSchema.optional(),
  data: z.union([ PersonsToSkillPathsUpdateInputSchema,PersonsToSkillPathsUncheckedUpdateInputSchema ]),
  where: PersonsToSkillPathsWhereUniqueInputSchema,
}).strict()

export default PersonsToSkillPathsUpdateArgsSchema;
