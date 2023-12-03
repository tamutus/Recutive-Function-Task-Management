import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToProjectsWhereInputSchema } from './EnergiesToProjectsWhereInputSchema';

export const EnergiesToProjectsListRelationFilterSchema: z.ZodType<Prisma.EnergiesToProjectsListRelationFilter> = z.object({
  every: z.lazy(() => EnergiesToProjectsWhereInputSchema).optional(),
  some: z.lazy(() => EnergiesToProjectsWhereInputSchema).optional(),
  none: z.lazy(() => EnergiesToProjectsWhereInputSchema).optional()
}).strict();

export default EnergiesToProjectsListRelationFilterSchema;
