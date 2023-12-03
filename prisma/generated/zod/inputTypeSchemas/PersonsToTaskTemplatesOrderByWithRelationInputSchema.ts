import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { PersonOrderByWithRelationInputSchema } from './PersonOrderByWithRelationInputSchema';
import { TaskTemplateOrderByWithRelationInputSchema } from './TaskTemplateOrderByWithRelationInputSchema';

export const PersonsToTaskTemplatesOrderByWithRelationInputSchema: z.ZodType<Prisma.PersonsToTaskTemplatesOrderByWithRelationInput> = z.object({
  personId: z.lazy(() => SortOrderSchema).optional(),
  taskId: z.lazy(() => SortOrderSchema).optional(),
  person: z.lazy(() => PersonOrderByWithRelationInputSchema).optional(),
  task: z.lazy(() => TaskTemplateOrderByWithRelationInputSchema).optional()
}).strict();

export default PersonsToTaskTemplatesOrderByWithRelationInputSchema;
