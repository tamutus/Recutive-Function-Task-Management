import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ProjectTemplateOrderByWithRelationInputSchema } from './ProjectTemplateOrderByWithRelationInputSchema';
import { TaskTemplateOrderByWithRelationInputSchema } from './TaskTemplateOrderByWithRelationInputSchema';

export const ProjectTemplatesToTaskTemplatesOrderByWithRelationInputSchema: z.ZodType<Prisma.ProjectTemplatesToTaskTemplatesOrderByWithRelationInput> = z.object({
  projectId: z.lazy(() => SortOrderSchema).optional(),
  taskId: z.lazy(() => SortOrderSchema).optional(),
  count: z.lazy(() => SortOrderSchema).optional(),
  schedule: z.lazy(() => SortOrderSchema).optional(),
  project: z.lazy(() => ProjectTemplateOrderByWithRelationInputSchema).optional(),
  task: z.lazy(() => TaskTemplateOrderByWithRelationInputSchema).optional()
}).strict();

export default ProjectTemplatesToTaskTemplatesOrderByWithRelationInputSchema;
