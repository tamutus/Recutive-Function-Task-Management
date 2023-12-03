import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToPersonsWhereInputSchema } from '../inputTypeSchemas/EnergiesToPersonsWhereInputSchema'

export const EnergiesToPersonsDeleteManyArgsSchema: z.ZodType<Prisma.EnergiesToPersonsDeleteManyArgs> = z.object({
  where: EnergiesToPersonsWhereInputSchema.optional(),
}).strict()

export default EnergiesToPersonsDeleteManyArgsSchema;
