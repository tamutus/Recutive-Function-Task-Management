import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToTagsWhereInputSchema } from '../inputTypeSchemas/EnergiesToTagsWhereInputSchema'

export const EnergiesToTagsDeleteManyArgsSchema: z.ZodType<Prisma.EnergiesToTagsDeleteManyArgs> = z.object({
  where: EnergiesToTagsWhereInputSchema.optional(),
}).strict()

export default EnergiesToTagsDeleteManyArgsSchema;
