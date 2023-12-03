import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTaskTemplatesWhereInputSchema } from './PrivateEnergiesToTaskTemplatesWhereInputSchema';

export const PrivateEnergiesToTaskTemplatesListRelationFilterSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesListRelationFilter> = z.object({
  every: z.lazy(() => PrivateEnergiesToTaskTemplatesWhereInputSchema).optional(),
  some: z.lazy(() => PrivateEnergiesToTaskTemplatesWhereInputSchema).optional(),
  none: z.lazy(() => PrivateEnergiesToTaskTemplatesWhereInputSchema).optional()
}).strict();

export default PrivateEnergiesToTaskTemplatesListRelationFilterSchema;
