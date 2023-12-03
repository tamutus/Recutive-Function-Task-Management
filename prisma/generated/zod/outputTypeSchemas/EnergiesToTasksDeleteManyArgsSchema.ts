import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToTasksWhereInputSchema } from '../inputTypeSchemas/EnergiesToTasksWhereInputSchema'

export const EnergiesToTasksDeleteManyArgsSchema: z.ZodType<Prisma.EnergiesToTasksDeleteManyArgs> = z.object({
  where: EnergiesToTasksWhereInputSchema.optional(),
}).strict()

export default EnergiesToTasksDeleteManyArgsSchema;
