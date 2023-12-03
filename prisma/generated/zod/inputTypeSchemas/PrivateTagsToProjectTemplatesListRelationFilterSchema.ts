import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToProjectTemplatesWhereInputSchema } from './PrivateTagsToProjectTemplatesWhereInputSchema';

export const PrivateTagsToProjectTemplatesListRelationFilterSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesListRelationFilter> = z.object({
  every: z.lazy(() => PrivateTagsToProjectTemplatesWhereInputSchema).optional(),
  some: z.lazy(() => PrivateTagsToProjectTemplatesWhereInputSchema).optional(),
  none: z.lazy(() => PrivateTagsToProjectTemplatesWhereInputSchema).optional()
}).strict();

export default PrivateTagsToProjectTemplatesListRelationFilterSchema;
