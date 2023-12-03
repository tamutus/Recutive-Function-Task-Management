import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToPrivateTagsWhereInputSchema } from './PrivateEnergiesToPrivateTagsWhereInputSchema';

export const PrivateEnergiesToPrivateTagsListRelationFilterSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsListRelationFilter> = z.object({
  every: z.lazy(() => PrivateEnergiesToPrivateTagsWhereInputSchema).optional(),
  some: z.lazy(() => PrivateEnergiesToPrivateTagsWhereInputSchema).optional(),
  none: z.lazy(() => PrivateEnergiesToPrivateTagsWhereInputSchema).optional()
}).strict();

export default PrivateEnergiesToPrivateTagsListRelationFilterSchema;
