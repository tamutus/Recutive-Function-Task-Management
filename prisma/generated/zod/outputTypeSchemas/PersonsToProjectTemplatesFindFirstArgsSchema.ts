import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToProjectTemplatesIncludeSchema } from '../inputTypeSchemas/PersonsToProjectTemplatesIncludeSchema'
import { PersonsToProjectTemplatesWhereInputSchema } from '../inputTypeSchemas/PersonsToProjectTemplatesWhereInputSchema'
import { PersonsToProjectTemplatesOrderByWithRelationInputSchema } from '../inputTypeSchemas/PersonsToProjectTemplatesOrderByWithRelationInputSchema'
import { PersonsToProjectTemplatesWhereUniqueInputSchema } from '../inputTypeSchemas/PersonsToProjectTemplatesWhereUniqueInputSchema'
import { PersonsToProjectTemplatesScalarFieldEnumSchema } from '../inputTypeSchemas/PersonsToProjectTemplatesScalarFieldEnumSchema'
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

export const PersonsToProjectTemplatesFindFirstArgsSchema: z.ZodType<Prisma.PersonsToProjectTemplatesFindFirstArgs> = z.object({
  select: PersonsToProjectTemplatesSelectSchema.optional(),
  include: PersonsToProjectTemplatesIncludeSchema.optional(),
  where: PersonsToProjectTemplatesWhereInputSchema.optional(),
  orderBy: z.union([ PersonsToProjectTemplatesOrderByWithRelationInputSchema.array(),PersonsToProjectTemplatesOrderByWithRelationInputSchema ]).optional(),
  cursor: PersonsToProjectTemplatesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PersonsToProjectTemplatesScalarFieldEnumSchema,PersonsToProjectTemplatesScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default PersonsToProjectTemplatesFindFirstArgsSchema;
