import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToTasksWhereInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTasksWhereInputSchema'

export const PrivateEnergiesToTasksDeleteManyArgsSchema: z.ZodType<Prisma.PrivateEnergiesToTasksDeleteManyArgs> = z.object({
  where: PrivateEnergiesToTasksWhereInputSchema.optional(),
}).strict()

export default PrivateEnergiesToTasksDeleteManyArgsSchema;
