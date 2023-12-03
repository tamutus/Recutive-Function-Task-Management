import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { PrivateTagOrderByWithRelationInputSchema } from './PrivateTagOrderByWithRelationInputSchema';
import { TaskOrderByWithRelationInputSchema } from './TaskOrderByWithRelationInputSchema';

export const PrivateTagsToTasksOrderByWithRelationInputSchema: z.ZodType<Prisma.PrivateTagsToTasksOrderByWithRelationInput> = z.object({
  tagId: z.lazy(() => SortOrderSchema).optional(),
  taskId: z.lazy(() => SortOrderSchema).optional(),
  tag: z.lazy(() => PrivateTagOrderByWithRelationInputSchema).optional(),
  task: z.lazy(() => TaskOrderByWithRelationInputSchema).optional()
}).strict();

export default PrivateTagsToTasksOrderByWithRelationInputSchema;
