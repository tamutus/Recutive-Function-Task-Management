import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToPrivateTagsWhereInputSchema } from './EnergiesToPrivateTagsWhereInputSchema';

export const EnergiesToPrivateTagsListRelationFilterSchema: z.ZodType<Prisma.EnergiesToPrivateTagsListRelationFilter> = z.object({
  every: z.lazy(() => EnergiesToPrivateTagsWhereInputSchema).optional(),
  some: z.lazy(() => EnergiesToPrivateTagsWhereInputSchema).optional(),
  none: z.lazy(() => EnergiesToPrivateTagsWhereInputSchema).optional()
}).strict();

export default EnergiesToPrivateTagsListRelationFilterSchema;
