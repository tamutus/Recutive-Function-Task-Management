import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagsToTaskTemplatesWhereInputSchema } from './TagsToTaskTemplatesWhereInputSchema';

export const TagsToTaskTemplatesListRelationFilterSchema: z.ZodType<Prisma.TagsToTaskTemplatesListRelationFilter> = z.object({
  every: z.lazy(() => TagsToTaskTemplatesWhereInputSchema).optional(),
  some: z.lazy(() => TagsToTaskTemplatesWhereInputSchema).optional(),
  none: z.lazy(() => TagsToTaskTemplatesWhereInputSchema).optional()
}).strict();

export default TagsToTaskTemplatesListRelationFilterSchema;
