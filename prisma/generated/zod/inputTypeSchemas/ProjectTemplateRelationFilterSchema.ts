import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateWhereInputSchema } from './ProjectTemplateWhereInputSchema';

export const ProjectTemplateRelationFilterSchema: z.ZodType<Prisma.ProjectTemplateRelationFilter> = z.object({
  is: z.lazy(() => ProjectTemplateWhereInputSchema).optional(),
  isNot: z.lazy(() => ProjectTemplateWhereInputSchema).optional()
}).strict();

export default ProjectTemplateRelationFilterSchema;
