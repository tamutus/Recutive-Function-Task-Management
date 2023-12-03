import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToTaskTemplatesIncludeSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskTemplatesIncludeSchema'
import { PrivateEnergiesToTaskTemplatesWhereInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskTemplatesWhereInputSchema'
import { PrivateEnergiesToTaskTemplatesOrderByWithRelationInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskTemplatesOrderByWithRelationInputSchema'
import { PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema'
import { PrivateEnergiesToTaskTemplatesScalarFieldEnumSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskTemplatesScalarFieldEnumSchema'
import { TaskTemplateArgsSchema } from "../outputTypeSchemas/TaskTemplateArgsSchema"
import { PrivateEnergyArgsSchema } from "../outputTypeSchemas/PrivateEnergyArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PrivateEnergiesToTaskTemplatesSelectSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesSelect> = z.object({
  taskId: z.boolean().optional(),
  energyId: z.boolean().optional(),
  task: z.union([z.boolean(),z.lazy(() => TaskTemplateArgsSchema)]).optional(),
  energy: z.union([z.boolean(),z.lazy(() => PrivateEnergyArgsSchema)]).optional(),
}).strict()

export const PrivateEnergiesToTaskTemplatesFindFirstArgsSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesFindFirstArgs> = z.object({
  select: PrivateEnergiesToTaskTemplatesSelectSchema.optional(),
  include: PrivateEnergiesToTaskTemplatesIncludeSchema.optional(),
  where: PrivateEnergiesToTaskTemplatesWhereInputSchema.optional(),
  orderBy: z.union([ PrivateEnergiesToTaskTemplatesOrderByWithRelationInputSchema.array(),PrivateEnergiesToTaskTemplatesOrderByWithRelationInputSchema ]).optional(),
  cursor: PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PrivateEnergiesToTaskTemplatesScalarFieldEnumSchema,PrivateEnergiesToTaskTemplatesScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default PrivateEnergiesToTaskTemplatesFindFirstArgsSchema;
