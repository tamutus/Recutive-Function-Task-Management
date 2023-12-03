import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToProjectTemplatesWhereInputSchema } from './EnergiesToProjectTemplatesWhereInputSchema';

export const EnergiesToProjectTemplatesListRelationFilterSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesListRelationFilter> = z.object({
  every: z.lazy(() => EnergiesToProjectTemplatesWhereInputSchema).optional(),
  some: z.lazy(() => EnergiesToProjectTemplatesWhereInputSchema).optional(),
  none: z.lazy(() => EnergiesToProjectTemplatesWhereInputSchema).optional()
}).strict();

export default EnergiesToProjectTemplatesListRelationFilterSchema;
