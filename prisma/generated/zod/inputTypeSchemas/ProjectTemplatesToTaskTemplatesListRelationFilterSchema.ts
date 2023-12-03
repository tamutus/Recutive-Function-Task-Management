import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplatesToTaskTemplatesWhereInputSchema } from './ProjectTemplatesToTaskTemplatesWhereInputSchema';

export const ProjectTemplatesToTaskTemplatesListRelationFilterSchema: z.ZodType<Prisma.ProjectTemplatesToTaskTemplatesListRelationFilter> = z.object({
  every: z.lazy(() => ProjectTemplatesToTaskTemplatesWhereInputSchema).optional(),
  some: z.lazy(() => ProjectTemplatesToTaskTemplatesWhereInputSchema).optional(),
  none: z.lazy(() => ProjectTemplatesToTaskTemplatesWhereInputSchema).optional()
}).strict();

export default ProjectTemplatesToTaskTemplatesListRelationFilterSchema;
