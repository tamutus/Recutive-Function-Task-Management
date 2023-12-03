import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TaskTemplateOrderByWithRelationInputSchema } from './TaskTemplateOrderByWithRelationInputSchema';
import { TagOrderByWithRelationInputSchema } from './TagOrderByWithRelationInputSchema';
import { PersonOrderByWithRelationInputSchema } from './PersonOrderByWithRelationInputSchema';

export const TagsToTaskTemplatesOrderByWithRelationInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesOrderByWithRelationInput> = z.object({
  taskId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  taggerId: z.lazy(() => SortOrderSchema).optional(),
  task: z.lazy(() => TaskTemplateOrderByWithRelationInputSchema).optional(),
  tag: z.lazy(() => TagOrderByWithRelationInputSchema).optional(),
  tagger: z.lazy(() => PersonOrderByWithRelationInputSchema).optional()
}).strict();

export default TagsToTaskTemplatesOrderByWithRelationInputSchema;
