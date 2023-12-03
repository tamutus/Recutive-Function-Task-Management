import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagsToTasksWhereInputSchema } from './TagsToTasksWhereInputSchema';

export const TagsToTasksListRelationFilterSchema: z.ZodType<Prisma.TagsToTasksListRelationFilter> = z.object({
  every: z.lazy(() => TagsToTasksWhereInputSchema).optional(),
  some: z.lazy(() => TagsToTasksWhereInputSchema).optional(),
  none: z.lazy(() => TagsToTasksWhereInputSchema).optional()
}).strict();

export default TagsToTasksListRelationFilterSchema;
