import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTaskTemplatesWhereInputSchema } from './EnergiesToTaskTemplatesWhereInputSchema';

export const EnergiesToTaskTemplatesListRelationFilterSchema: z.ZodType<Prisma.EnergiesToTaskTemplatesListRelationFilter> = z.object({
  every: z.lazy(() => EnergiesToTaskTemplatesWhereInputSchema).optional(),
  some: z.lazy(() => EnergiesToTaskTemplatesWhereInputSchema).optional(),
  none: z.lazy(() => EnergiesToTaskTemplatesWhereInputSchema).optional()
}).strict();

export default EnergiesToTaskTemplatesListRelationFilterSchema;
