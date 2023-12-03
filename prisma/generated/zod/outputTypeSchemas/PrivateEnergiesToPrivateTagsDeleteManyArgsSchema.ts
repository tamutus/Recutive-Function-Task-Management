import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToPrivateTagsWhereInputSchema } from '../inputTypeSchemas/PrivateEnergiesToPrivateTagsWhereInputSchema'

export const PrivateEnergiesToPrivateTagsDeleteManyArgsSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsDeleteManyArgs> = z.object({
  where: PrivateEnergiesToPrivateTagsWhereInputSchema.optional(),
}).strict()

export default PrivateEnergiesToPrivateTagsDeleteManyArgsSchema;
