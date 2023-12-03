import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateWhereInputSchema } from './ProjectTemplateWhereInputSchema';

export const ProjectTemplateNullableRelationFilterSchema: z.ZodType<Prisma.ProjectTemplateNullableRelationFilter> = z.object({
  is: z.lazy(() => ProjectTemplateWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => ProjectTemplateWhereInputSchema).optional().nullable()
}).strict();

export default ProjectTemplateNullableRelationFilterSchema;
