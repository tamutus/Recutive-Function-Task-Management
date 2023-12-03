import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTasksWhereInputSchema } from './EnergiesToTasksWhereInputSchema';

export const EnergiesToTasksListRelationFilterSchema: z.ZodType<Prisma.EnergiesToTasksListRelationFilter> = z.object({
  every: z.lazy(() => EnergiesToTasksWhereInputSchema).optional(),
  some: z.lazy(() => EnergiesToTasksWhereInputSchema).optional(),
  none: z.lazy(() => EnergiesToTasksWhereInputSchema).optional()
}).strict();

export default EnergiesToTasksListRelationFilterSchema;
