import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToProjectTemplatesIncludeSchema } from '../inputTypeSchemas/PersonsToProjectTemplatesIncludeSchema'
import { PersonsToProjectTemplatesUpdateInputSchema } from '../inputTypeSchemas/PersonsToProjectTemplatesUpdateInputSchema'
import { PersonsToProjectTemplatesUncheckedUpdateInputSchema } from '../inputTypeSchemas/PersonsToProjectTemplatesUncheckedUpdateInputSchema'
import { PersonsToProjectTemplatesWhereUniqueInputSchema } from '../inputTypeSchemas/PersonsToProjectTemplatesWhereUniqueInputSchema'
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

export const PersonsToProjectTemplatesUpdateArgsSchema: z.ZodType<Prisma.PersonsToProjectTemplatesUpdateArgs> = z.object({
  select: PersonsToProjectTemplatesSelectSchema.optional(),
  include: PersonsToProjectTemplatesIncludeSchema.optional(),
  data: z.union([ PersonsToProjectTemplatesUpdateInputSchema,PersonsToProjectTemplatesUncheckedUpdateInputSchema ]),
  where: PersonsToProjectTemplatesWhereUniqueInputSchema,
}).strict()

export default PersonsToProjectTemplatesUpdateArgsSchema;
