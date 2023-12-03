import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToSkillPathsIncludeSchema } from '../inputTypeSchemas/PersonsToSkillPathsIncludeSchema'
import { PersonsToSkillPathsWhereUniqueInputSchema } from '../inputTypeSchemas/PersonsToSkillPathsWhereUniqueInputSchema'
import { PersonsToSkillPathsCreateInputSchema } from '../inputTypeSchemas/PersonsToSkillPathsCreateInputSchema'
import { PersonsToSkillPathsUncheckedCreateInputSchema } from '../inputTypeSchemas/PersonsToSkillPathsUncheckedCreateInputSchema'
import { PersonsToSkillPathsUpdateInputSchema } from '../inputTypeSchemas/PersonsToSkillPathsUpdateInputSchema'
import { PersonsToSkillPathsUncheckedUpdateInputSchema } from '../inputTypeSchemas/PersonsToSkillPathsUncheckedUpdateInputSchema'
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

export const PersonsToSkillPathsUpsertArgsSchema: z.ZodType<Prisma.PersonsToSkillPathsUpsertArgs> = z.object({
  select: PersonsToSkillPathsSelectSchema.optional(),
  include: PersonsToSkillPathsIncludeSchema.optional(),
  where: PersonsToSkillPathsWhereUniqueInputSchema,
  create: z.union([ PersonsToSkillPathsCreateInputSchema,PersonsToSkillPathsUncheckedCreateInputSchema ]),
  update: z.union([ PersonsToSkillPathsUpdateInputSchema,PersonsToSkillPathsUncheckedUpdateInputSchema ]),
}).strict()

export default PersonsToSkillPathsUpsertArgsSchema;