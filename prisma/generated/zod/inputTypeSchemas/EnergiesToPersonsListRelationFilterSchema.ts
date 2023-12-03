import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToPersonsWhereInputSchema } from './EnergiesToPersonsWhereInputSchema';

export const EnergiesToPersonsListRelationFilterSchema: z.ZodType<Prisma.EnergiesToPersonsListRelationFilter> = z.object({
  every: z.lazy(() => EnergiesToPersonsWhereInputSchema).optional(),
  some: z.lazy(() => EnergiesToPersonsWhereInputSchema).optional(),
  none: z.lazy(() => EnergiesToPersonsWhereInputSchema).optional()
}).strict();

export default EnergiesToPersonsListRelationFilterSchema;
