import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTagsWhereInputSchema } from './PrivateEnergiesToTagsWhereInputSchema';

export const PrivateEnergiesToTagsListRelationFilterSchema: z.ZodType<Prisma.PrivateEnergiesToTagsListRelationFilter> = z.object({
  every: z.lazy(() => PrivateEnergiesToTagsWhereInputSchema).optional(),
  some: z.lazy(() => PrivateEnergiesToTagsWhereInputSchema).optional(),
  none: z.lazy(() => PrivateEnergiesToTagsWhereInputSchema).optional()
}).strict();

export default PrivateEnergiesToTagsListRelationFilterSchema;
