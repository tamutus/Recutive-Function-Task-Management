import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToTaskTemplatesIncludeSchema } from '../inputTypeSchemas/PersonsToTaskTemplatesIncludeSchema'
import { PersonsToTaskTemplatesWhereInputSchema } from '../inputTypeSchemas/PersonsToTaskTemplatesWhereInputSchema'
import { PersonsToTaskTemplatesOrderByWithRelationInputSchema } from '../inputTypeSchemas/PersonsToTaskTemplatesOrderByWithRelationInputSchema'
import { PersonsToTaskTemplatesWhereUniqueInputSchema } from '../inputTypeSchemas/PersonsToTaskTemplatesWhereUniqueInputSchema'
import { PersonsToTaskTemplatesScalarFieldEnumSchema } from '../inputTypeSchemas/PersonsToTaskTemplatesScalarFieldEnumSchema'
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"
import { TaskTemplateArgsSchema } from "../outputTypeSchemas/TaskTemplateArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PersonsToTaskTemplatesSelectSchema: z.ZodType<Prisma.PersonsToTaskTemplatesSelect> = z.object({
  personId: z.boolean().optional(),
  taskId: z.boolean().optional(),
  person: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
  task: z.union([z.boolean(),z.lazy(() => TaskTemplateArgsSchema)]).optional(),
}).strict()

export const PersonsToTaskTemplatesFindFirstArgsSchema: z.ZodType<Prisma.PersonsToTaskTemplatesFindFirstArgs> = z.object({
  select: PersonsToTaskTemplatesSelectSchema.optional(),
  include: PersonsToTaskTemplatesIncludeSchema.optional(),
  where: PersonsToTaskTemplatesWhereInputSchema.optional(),
  orderBy: z.union([ PersonsToTaskTemplatesOrderByWithRelationInputSchema.array(),PersonsToTaskTemplatesOrderByWithRelationInputSchema ]).optional(),
  cursor: PersonsToTaskTemplatesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PersonsToTaskTemplatesScalarFieldEnumSchema,PersonsToTaskTemplatesScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default PersonsToTaskTemplatesFindFirstArgsSchema;
