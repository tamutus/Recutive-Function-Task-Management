import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ProjectTemplatesToTagsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProjectTemplatesToTagsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ProjectTemplatesToTagsOrderByRelationAggregateInputSchema;