import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToTaskTemplatesWhereInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskTemplatesWhereInputSchema'

export const PrivateEnergiesToTaskTemplatesDeleteManyArgsSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesDeleteManyArgs> = z.object({
  where: PrivateEnergiesToTaskTemplatesWhereInputSchema.optional(),
}).strict()

export default PrivateEnergiesToTaskTemplatesDeleteManyArgsSchema;
