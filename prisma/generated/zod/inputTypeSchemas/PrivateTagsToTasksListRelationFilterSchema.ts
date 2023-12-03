import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToTasksWhereInputSchema } from './PrivateTagsToTasksWhereInputSchema';

export const PrivateTagsToTasksListRelationFilterSchema: z.ZodType<Prisma.PrivateTagsToTasksListRelationFilter> = z.object({
  every: z.lazy(() => PrivateTagsToTasksWhereInputSchema).optional(),
  some: z.lazy(() => PrivateTagsToTasksWhereInputSchema).optional(),
  none: z.lazy(() => PrivateTagsToTasksWhereInputSchema).optional()
}).strict();

export default PrivateTagsToTasksListRelationFilterSchema;
