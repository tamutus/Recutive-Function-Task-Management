import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToProjectTemplatesWhereInputSchema } from '../inputTypeSchemas/PrivateEnergiesToProjectTemplatesWhereInputSchema'

export const PrivateEnergiesToProjectTemplatesDeleteManyArgsSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesDeleteManyArgs> = z.object({
  where: PrivateEnergiesToProjectTemplatesWhereInputSchema.optional(),
}).strict()

export default PrivateEnergiesToProjectTemplatesDeleteManyArgsSchema;
