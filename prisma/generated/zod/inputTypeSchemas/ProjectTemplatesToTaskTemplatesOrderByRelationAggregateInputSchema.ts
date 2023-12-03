import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ProjectTemplatesToTaskTemplatesOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProjectTemplatesToTaskTemplatesOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ProjectTemplatesToTaskTemplatesOrderByRelationAggregateInputSchema;
