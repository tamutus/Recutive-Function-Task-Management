import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToTaskTemplatesIncludeSchema } from '../inputTypeSchemas/EnergiesToTaskTemplatesIncludeSchema'
import { EnergiesToTaskTemplatesUpdateInputSchema } from '../inputTypeSchemas/EnergiesToTaskTemplatesUpdateInputSchema'
import { EnergiesToTaskTemplatesUncheckedUpdateInputSchema } from '../inputTypeSchemas/EnergiesToTaskTemplatesUncheckedUpdateInputSchema'
import { EnergiesToTaskTemplatesWhereUniqueInputSchema } from '../inputTypeSchemas/EnergiesToTaskTemplatesWhereUniqueInputSchema'
import { TaskTemplateArgsSchema } from "../outputTypeSchemas/TaskTemplateArgsSchema"
import { EnergyArgsSchema } from "../outputTypeSchemas/EnergyArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EnergiesToTaskTemplatesSelectSchema: z.ZodType<Prisma.EnergiesToTaskTemplatesSelect> = z.object({
  taskId: z.boolean().optional(),
  energyId: z.boolean().optional(),
  info: z.boolean().optional(),
  links: z.boolean().optional(),
  task: z.union([z.boolean(),z.lazy(() => TaskTemplateArgsSchema)]).optional(),
  energy: z.union([z.boolean(),z.lazy(() => EnergyArgsSchema)]).optional(),
}).strict()

export const EnergiesToTaskTemplatesUpdateArgsSchema: z.ZodType<Prisma.EnergiesToTaskTemplatesUpdateArgs> = z.object({
  select: EnergiesToTaskTemplatesSelectSchema.optional(),
  include: EnergiesToTaskTemplatesIncludeSchema.optional(),
  data: z.union([ EnergiesToTaskTemplatesUpdateInputSchema,EnergiesToTaskTemplatesUncheckedUpdateInputSchema ]),
  where: EnergiesToTaskTemplatesWhereUniqueInputSchema,
}).strict()

export default EnergiesToTaskTemplatesUpdateArgsSchema;