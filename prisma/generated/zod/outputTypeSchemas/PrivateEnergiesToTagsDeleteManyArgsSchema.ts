import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToTagsWhereInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTagsWhereInputSchema'

export const PrivateEnergiesToTagsDeleteManyArgsSchema: z.ZodType<Prisma.PrivateEnergiesToTagsDeleteManyArgs> = z.object({
  where: PrivateEnergiesToTagsWhereInputSchema.optional(),
}).strict()

export default PrivateEnergiesToTagsDeleteManyArgsSchema;
