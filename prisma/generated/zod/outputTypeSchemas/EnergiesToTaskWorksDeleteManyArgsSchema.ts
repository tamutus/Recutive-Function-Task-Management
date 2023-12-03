import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToTaskWorksWhereInputSchema } from '../inputTypeSchemas/EnergiesToTaskWorksWhereInputSchema'

export const EnergiesToTaskWorksDeleteManyArgsSchema: z.ZodType<Prisma.EnergiesToTaskWorksDeleteManyArgs> = z.object({
  where: EnergiesToTaskWorksWhereInputSchema.optional(),
}).strict()

export default EnergiesToTaskWorksDeleteManyArgsSchema;
