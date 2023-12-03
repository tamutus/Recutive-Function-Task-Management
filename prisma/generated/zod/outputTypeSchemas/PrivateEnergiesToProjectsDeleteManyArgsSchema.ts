import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToProjectsWhereInputSchema } from '../inputTypeSchemas/PrivateEnergiesToProjectsWhereInputSchema'

export const PrivateEnergiesToProjectsDeleteManyArgsSchema: z.ZodType<Prisma.PrivateEnergiesToProjectsDeleteManyArgs> = z.object({
  where: PrivateEnergiesToProjectsWhereInputSchema.optional(),
}).strict()

export default PrivateEnergiesToProjectsDeleteManyArgsSchema;
