import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TaskTemplateOrderByWithRelationInputSchema } from './TaskTemplateOrderByWithRelationInputSchema';

export const TaskTemplateLinkOrderByWithRelationInputSchema: z.ZodType<Prisma.TaskTemplateLinkOrderByWithRelationInput> = z.object({
  precursorId: z.lazy(() => SortOrderSchema).optional(),
  successorId: z.lazy(() => SortOrderSchema).optional(),
  linkType: z.lazy(() => SortOrderSchema).optional(),
  precursor: z.lazy(() => TaskTemplateOrderByWithRelationInputSchema).optional(),
  successor: z.lazy(() => TaskTemplateOrderByWithRelationInputSchema).optional()
}).strict();

export default TaskTemplateLinkOrderByWithRelationInputSchema;
