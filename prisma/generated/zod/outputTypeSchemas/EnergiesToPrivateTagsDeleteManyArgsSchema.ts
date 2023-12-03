import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToPrivateTagsWhereInputSchema } from '../inputTypeSchemas/EnergiesToPrivateTagsWhereInputSchema'

export const EnergiesToPrivateTagsDeleteManyArgsSchema: z.ZodType<Prisma.EnergiesToPrivateTagsDeleteManyArgs> = z.object({
  where: EnergiesToPrivateTagsWhereInputSchema.optional(),
}).strict()

export default EnergiesToPrivateTagsDeleteManyArgsSchema;
