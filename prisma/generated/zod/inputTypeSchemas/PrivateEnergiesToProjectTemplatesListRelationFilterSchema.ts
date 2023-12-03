import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToProjectTemplatesWhereInputSchema } from './PrivateEnergiesToProjectTemplatesWhereInputSchema';

export const PrivateEnergiesToProjectTemplatesListRelationFilterSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesListRelationFilter> = z.object({
  every: z.lazy(() => PrivateEnergiesToProjectTemplatesWhereInputSchema).optional(),
  some: z.lazy(() => PrivateEnergiesToProjectTemplatesWhereInputSchema).optional(),
  none: z.lazy(() => PrivateEnergiesToProjectTemplatesWhereInputSchema).optional()
}).strict();

export default PrivateEnergiesToProjectTemplatesListRelationFilterSchema;
