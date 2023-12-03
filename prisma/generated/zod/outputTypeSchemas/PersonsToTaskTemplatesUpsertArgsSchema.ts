import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonsToTaskTemplatesIncludeSchema } from '../inputTypeSchemas/PersonsToTaskTemplatesIncludeSchema'
import { PersonsToTaskTemplatesWhereUniqueInputSchema } from '../inputTypeSchemas/PersonsToTaskTemplatesWhereUniqueInputSchema'
import { PersonsToTaskTemplatesCreateInputSchema } from '../inputTypeSchemas/PersonsToTaskTemplatesCreateInputSchema'
import { PersonsToTaskTemplatesUncheckedCreateInputSchema } from '../inputTypeSchemas/PersonsToTaskTemplatesUncheckedCreateInputSchema'
import { PersonsToTaskTemplatesUpdateInputSchema } from '../inputTypeSchemas/PersonsToTaskTemplatesUpdateInputSchema'
import { PersonsToTaskTemplatesUncheckedUpdateInputSchema } from '../inputTypeSchemas/PersonsToTaskTemplatesUncheckedUpdateInputSchema'
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

export const PersonsToTaskTemplatesUpsertArgsSchema: z.ZodType<Prisma.PersonsToTaskTemplatesUpsertArgs> = z.object({
  select: PersonsToTaskTemplatesSelectSchema.optional(),
  include: PersonsToTaskTemplatesIncludeSchema.optional(),
  where: PersonsToTaskTemplatesWhereUniqueInputSchema,
  create: z.union([ PersonsToTaskTemplatesCreateInputSchema,PersonsToTaskTemplatesUncheckedCreateInputSchema ]),
  update: z.union([ PersonsToTaskTemplatesUpdateInputSchema,PersonsToTaskTemplatesUncheckedUpdateInputSchema ]),
}).strict()

export default PersonsToTaskTemplatesUpsertArgsSchema;
