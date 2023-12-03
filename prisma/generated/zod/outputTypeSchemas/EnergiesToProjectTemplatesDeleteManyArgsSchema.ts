import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToProjectTemplatesWhereInputSchema } from '../inputTypeSchemas/EnergiesToProjectTemplatesWhereInputSchema'

export const EnergiesToProjectTemplatesDeleteManyArgsSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesDeleteManyArgs> = z.object({
  where: EnergiesToProjectTemplatesWhereInputSchema.optional(),
}).strict()

export default EnergiesToProjectTemplatesDeleteManyArgsSchema;
