import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectTemplatesToTaskTemplatesSelectSchema } from '../inputTypeSchemas/ProjectTemplatesToTaskTemplatesSelectSchema';
import { ProjectTemplatesToTaskTemplatesIncludeSchema } from '../inputTypeSchemas/ProjectTemplatesToTaskTemplatesIncludeSchema';

export const ProjectTemplatesToTaskTemplatesArgsSchema: z.ZodType<Prisma.ProjectTemplatesToTaskTemplatesDefaultArgs> = z.object({
  select: z.lazy(() => ProjectTemplatesToTaskTemplatesSelectSchema).optional(),
  include: z.lazy(() => ProjectTemplatesToTaskTemplatesIncludeSchema).optional(),
}).strict();

export default ProjectTemplatesToTaskTemplatesArgsSchema;
