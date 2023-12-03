import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTagsWhereInputSchema } from './EnergiesToTagsWhereInputSchema';

export const EnergiesToTagsListRelationFilterSchema: z.ZodType<Prisma.EnergiesToTagsListRelationFilter> = z.object({
  every: z.lazy(() => EnergiesToTagsWhereInputSchema).optional(),
  some: z.lazy(() => EnergiesToTagsWhereInputSchema).optional(),
  none: z.lazy(() => EnergiesToTagsWhereInputSchema).optional()
}).strict();

export default EnergiesToTagsListRelationFilterSchema;
