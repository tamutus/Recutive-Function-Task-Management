import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToProjectsIncludeSchema } from '../inputTypeSchemas/PersonsToProjectsIncludeSchema'
import { PersonsToProjectsWhereInputSchema } from '../inputTypeSchemas/PersonsToProjectsWhereInputSchema'
import { PersonsToProjectsOrderByWithRelationInputSchema } from '../inputTypeSchemas/PersonsToProjectsOrderByWithRelationInputSchema'
import { PersonsToProjectsWhereUniqueInputSchema } from '../inputTypeSchemas/PersonsToProjectsWhereUniqueInputSchema'
import { PersonsToProjectsScalarFieldEnumSchema } from '../inputTypeSchemas/PersonsToProjectsScalarFieldEnumSchema'
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

export const PersonsToProjectsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PersonsToProjectsFindFirstOrThrowArgs> = z.object({
  select: PersonsToProjectsSelectSchema.optional(),
  include: PersonsToProjectsIncludeSchema.optional(),
  where: PersonsToProjectsWhereInputSchema.optional(),
  orderBy: z.union([ PersonsToProjectsOrderByWithRelationInputSchema.array(),PersonsToProjectsOrderByWithRelationInputSchema ]).optional(),
  cursor: PersonsToProjectsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PersonsToProjectsScalarFieldEnumSchema,PersonsToProjectsScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default PersonsToProjectsFindFirstOrThrowArgsSchema;
