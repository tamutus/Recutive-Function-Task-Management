import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToProjectsIncludeSchema } from '../inputTypeSchemas/PersonsToProjectsIncludeSchema'
import { PersonsToProjectsWhereUniqueInputSchema } from '../inputTypeSchemas/PersonsToProjectsWhereUniqueInputSchema'
import { PersonsToProjectsCreateInputSchema } from '../inputTypeSchemas/PersonsToProjectsCreateInputSchema'
import { PersonsToProjectsUncheckedCreateInputSchema } from '../inputTypeSchemas/PersonsToProjectsUncheckedCreateInputSchema'
import { PersonsToProjectsUpdateInputSchema } from '../inputTypeSchemas/PersonsToProjectsUpdateInputSchema'
import { PersonsToProjectsUncheckedUpdateInputSchema } from '../inputTypeSchemas/PersonsToProjectsUncheckedUpdateInputSchema'
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PersonsToProjectsSelectSchema: z.ZodType<Prisma.PersonsToProjectsSelect> = z.object({
  personId: z.boolean().optional(),
  projectId: z.boolean().optional(),
  volunteerDate: z.boolean().optional(),
  person: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
}).strict()

export const PersonsToProjectsUpsertArgsSchema: z.ZodType<Prisma.PersonsToProjectsUpsertArgs> = z.object({
  select: PersonsToProjectsSelectSchema.optional(),
  include: PersonsToProjectsIncludeSchema.optional(),
  where: PersonsToProjectsWhereUniqueInputSchema,
  create: z.union([ PersonsToProjectsCreateInputSchema,PersonsToProjectsUncheckedCreateInputSchema ]),
  update: z.union([ PersonsToProjectsUpdateInputSchema,PersonsToProjectsUncheckedUpdateInputSchema ]),
}).strict()

export default PersonsToProjectsUpsertArgsSchema;
