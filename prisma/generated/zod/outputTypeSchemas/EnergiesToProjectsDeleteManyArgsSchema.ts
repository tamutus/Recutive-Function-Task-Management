import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToProjectsWhereInputSchema } from '../inputTypeSchemas/EnergiesToProjectsWhereInputSchema'

export const EnergiesToProjectsDeleteManyArgsSchema: z.ZodType<Prisma.EnergiesToProjectsDeleteManyArgs> = z.object({
  where: EnergiesToProjectsWhereInputSchema.optional(),
}).strict()

export default EnergiesToProjectsDeleteManyArgsSchema;
