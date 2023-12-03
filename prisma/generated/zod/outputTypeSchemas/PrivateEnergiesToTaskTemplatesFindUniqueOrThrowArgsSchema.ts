import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToTaskTemplatesIncludeSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskTemplatesIncludeSchema'
import { PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema'
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

export const PrivateEnergiesToTaskTemplatesFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesFindUniqueOrThrowArgs> = z.object({
  select: PrivateEnergiesToTaskTemplatesSelectSchema.optional(),
  include: PrivateEnergiesToTaskTemplatesIncludeSchema.optional(),
  where: PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema,
}).strict()

export default PrivateEnergiesToTaskTemplatesFindUniqueOrThrowArgsSchema;
