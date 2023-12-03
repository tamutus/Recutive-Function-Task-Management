import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToPersonsWhereInputSchema } from './EnergiesToPersonsWhereInputSchema';

export const EnergiesToPersonsRelationFilterSchema: z.ZodType<Prisma.EnergiesToPersonsRelationFilter> = z.object({
  is: z.lazy(() => EnergiesToPersonsWhereInputSchema).optional(),
  isNot: z.lazy(() => EnergiesToPersonsWhereInputSchema).optional()
}).strict();

export default EnergiesToPersonsRelationFilterSchema;
