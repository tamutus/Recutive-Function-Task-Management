import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplatesToTagsWhereInputSchema } from './ProjectTemplatesToTagsWhereInputSchema';

export const ProjectTemplatesToTagsListRelationFilterSchema: z.ZodType<Prisma.ProjectTemplatesToTagsListRelationFilter> = z.object({
  every: z.lazy(() => ProjectTemplatesToTagsWhereInputSchema).optional(),
  some: z.lazy(() => ProjectTemplatesToTagsWhereInputSchema).optional(),
  none: z.lazy(() => ProjectTemplatesToTagsWhereInputSchema).optional()
}).strict();

export default ProjectTemplatesToTagsListRelationFilterSchema;
