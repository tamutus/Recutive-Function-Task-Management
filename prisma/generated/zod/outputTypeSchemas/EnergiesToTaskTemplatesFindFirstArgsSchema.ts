import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToTaskTemplatesIncludeSchema } from '../inputTypeSchemas/EnergiesToTaskTemplatesIncludeSchema'
import { EnergiesToTaskTemplatesWhereInputSchema } from '../inputTypeSchemas/EnergiesToTaskTemplatesWhereInputSchema'
import { EnergiesToTaskTemplatesOrderByWithRelationInputSchema } from '../inputTypeSchemas/EnergiesToTaskTemplatesOrderByWithRelationInputSchema'
import { EnergiesToTaskTemplatesWhereUniqueInputSchema } from '../inputTypeSchemas/EnergiesToTaskTemplatesWhereUniqueInputSchema'
import { EnergiesToTaskTemplatesScalarFieldEnumSchema } from '../inputTypeSchemas/EnergiesToTaskTemplatesScalarFieldEnumSchema'
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

export const EnergiesToTaskTemplatesFindFirstArgsSchema: z.ZodType<Prisma.EnergiesToTaskTemplatesFindFirstArgs> = z.object({
  select: EnergiesToTaskTemplatesSelectSchema.optional(),
  include: EnergiesToTaskTemplatesIncludeSchema.optional(),
  where: EnergiesToTaskTemplatesWhereInputSchema.optional(),
  orderBy: z.union([ EnergiesToTaskTemplatesOrderByWithRelationInputSchema.array(),EnergiesToTaskTemplatesOrderByWithRelationInputSchema ]).optional(),
  cursor: EnergiesToTaskTemplatesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EnergiesToTaskTemplatesScalarFieldEnumSchema,EnergiesToTaskTemplatesScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default EnergiesToTaskTemplatesFindFirstArgsSchema;
