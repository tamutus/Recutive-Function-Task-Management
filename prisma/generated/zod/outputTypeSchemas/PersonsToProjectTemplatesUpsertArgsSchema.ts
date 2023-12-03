import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToProjectTemplatesIncludeSchema } from '../inputTypeSchemas/PersonsToProjectTemplatesIncludeSchema'
import { PersonsToProjectTemplatesWhereUniqueInputSchema } from '../inputTypeSchemas/PersonsToProjectTemplatesWhereUniqueInputSchema'
import { PersonsToProjectTemplatesCreateInputSchema } from '../inputTypeSchemas/PersonsToProjectTemplatesCreateInputSchema'
import { PersonsToProjectTemplatesUncheckedCreateInputSchema } from '../inputTypeSchemas/PersonsToProjectTemplatesUncheckedCreateInputSchema'
import { PersonsToProjectTemplatesUpdateInputSchema } from '../inputTypeSchemas/PersonsToProjectTemplatesUpdateInputSchema'
import { PersonsToProjectTemplatesUncheckedUpdateInputSchema } from '../inputTypeSchemas/PersonsToProjectTemplatesUncheckedUpdateInputSchema'
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"
import { ProjectTemplateArgsSchema } from "../outputTypeSchemas/ProjectTemplateArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PersonsToProjectTemplatesSelectSchema: z.ZodType<Prisma.PersonsToProjectTemplatesSelect> = z.object({
  personId: z.boolean().optional(),
  projectId: z.boolean().optional(),
  person: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectTemplateArgsSchema)]).optional(),
}).strict()

export const PersonsToProjectTemplatesUpsertArgsSchema: z.ZodType<Prisma.PersonsToProjectTemplatesUpsertArgs> = z.object({
  select: PersonsToProjectTemplatesSelectSchema.optional(),
  include: PersonsToProjectTemplatesIncludeSchema.optional(),
  where: PersonsToProjectTemplatesWhereUniqueInputSchema,
  create: z.union([ PersonsToProjectTemplatesCreateInputSchema,PersonsToProjectTemplatesUncheckedCreateInputSchema ]),
  update: z.union([ PersonsToProjectTemplatesUpdateInputSchema,PersonsToProjectTemplatesUncheckedUpdateInputSchema ]),
}).strict()

export default PersonsToProjectTemplatesUpsertArgsSchema;
