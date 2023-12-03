import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToProjectTemplatesIncludeSchema } from '../inputTypeSchemas/PersonsToProjectTemplatesIncludeSchema'
import { PersonsToProjectTemplatesCreateInputSchema } from '../inputTypeSchemas/PersonsToProjectTemplatesCreateInputSchema'
import { PersonsToProjectTemplatesUncheckedCreateInputSchema } from '../inputTypeSchemas/PersonsToProjectTemplatesUncheckedCreateInputSchema'
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

export const PersonsToProjectTemplatesCreateArgsSchema: z.ZodType<Prisma.PersonsToProjectTemplatesCreateArgs> = z.object({
  select: PersonsToProjectTemplatesSelectSchema.optional(),
  include: PersonsToProjectTemplatesIncludeSchema.optional(),
  data: z.union([ PersonsToProjectTemplatesCreateInputSchema,PersonsToProjectTemplatesUncheckedCreateInputSchema ]),
}).strict()

export default PersonsToProjectTemplatesCreateArgsSchema;
