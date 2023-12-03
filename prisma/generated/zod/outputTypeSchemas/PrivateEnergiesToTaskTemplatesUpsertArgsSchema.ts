import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToTaskTemplatesIncludeSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskTemplatesIncludeSchema'
import { PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema'
import { PrivateEnergiesToTaskTemplatesCreateInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskTemplatesCreateInputSchema'
import { PrivateEnergiesToTaskTemplatesUncheckedCreateInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskTemplatesUncheckedCreateInputSchema'
import { PrivateEnergiesToTaskTemplatesUpdateInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskTemplatesUpdateInputSchema'
import { PrivateEnergiesToTaskTemplatesUncheckedUpdateInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskTemplatesUncheckedUpdateInputSchema'
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

export const PrivateEnergiesToTaskTemplatesUpsertArgsSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesUpsertArgs> = z.object({
  select: PrivateEnergiesToTaskTemplatesSelectSchema.optional(),
  include: PrivateEnergiesToTaskTemplatesIncludeSchema.optional(),
  where: PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema,
  create: z.union([ PrivateEnergiesToTaskTemplatesCreateInputSchema,PrivateEnergiesToTaskTemplatesUncheckedCreateInputSchema ]),
  update: z.union([ PrivateEnergiesToTaskTemplatesUpdateInputSchema,PrivateEnergiesToTaskTemplatesUncheckedUpdateInputSchema ]),
}).strict()

export default PrivateEnergiesToTaskTemplatesUpsertArgsSchema;
