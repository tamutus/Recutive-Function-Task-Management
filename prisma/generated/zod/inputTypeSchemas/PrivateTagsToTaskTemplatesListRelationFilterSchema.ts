import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToTaskTemplatesWhereInputSchema } from './PrivateTagsToTaskTemplatesWhereInputSchema';

export const PrivateTagsToTaskTemplatesListRelationFilterSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesListRelationFilter> = z.object({
  every: z.lazy(() => PrivateTagsToTaskTemplatesWhereInputSchema).optional(),
  some: z.lazy(() => PrivateTagsToTaskTemplatesWhereInputSchema).optional(),
  none: z.lazy(() => PrivateTagsToTaskTemplatesWhereInputSchema).optional()
}).strict();

export default PrivateTagsToTaskTemplatesListRelationFilterSchema;
