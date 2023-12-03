import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToTaskTemplatesWhereInputSchema } from '../inputTypeSchemas/EnergiesToTaskTemplatesWhereInputSchema'

export const EnergiesToTaskTemplatesDeleteManyArgsSchema: z.ZodType<Prisma.EnergiesToTaskTemplatesDeleteManyArgs> = z.object({
  where: EnergiesToTaskTemplatesWhereInputSchema.optional(),
}).strict()

export default EnergiesToTaskTemplatesDeleteManyArgsSchema;
