import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToTaskWorksWhereInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskWorksWhereInputSchema'

export const PrivateEnergiesToTaskWorksDeleteManyArgsSchema: z.ZodType<Prisma.PrivateEnergiesToTaskWorksDeleteManyArgs> = z.object({
  where: PrivateEnergiesToTaskWorksWhereInputSchema.optional(),
}).strict()

export default PrivateEnergiesToTaskWorksDeleteManyArgsSchema;
