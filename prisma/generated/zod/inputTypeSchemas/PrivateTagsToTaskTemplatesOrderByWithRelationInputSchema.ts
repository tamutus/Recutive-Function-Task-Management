import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TaskTemplateOrderByWithRelationInputSchema } from './TaskTemplateOrderByWithRelationInputSchema';
import { PrivateTagOrderByWithRelationInputSchema } from './PrivateTagOrderByWithRelationInputSchema';

export const PrivateTagsToTaskTemplatesOrderByWithRelationInputSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesOrderByWithRelationInput> = z.object({
  taskId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  task: z.lazy(() => TaskTemplateOrderByWithRelationInputSchema).optional(),
  tag: z.lazy(() => PrivateTagOrderByWithRelationInputSchema).optional()
}).strict();

export default PrivateTagsToTaskTemplatesOrderByWithRelationInputSchema;
