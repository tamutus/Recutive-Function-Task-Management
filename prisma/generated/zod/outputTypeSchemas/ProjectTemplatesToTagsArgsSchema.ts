import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectTemplatesToTagsSelectSchema } from '../inputTypeSchemas/ProjectTemplatesToTagsSelectSchema';
import { ProjectTemplatesToTagsIncludeSchema } from '../inputTypeSchemas/ProjectTemplatesToTagsIncludeSchema';

export const ProjectTemplatesToTagsArgsSchema: z.ZodType<Prisma.ProjectTemplatesToTagsDefaultArgs> = z.object({
  select: z.lazy(() => ProjectTemplatesToTagsSelectSchema).optional(),
  include: z.lazy(() => ProjectTemplatesToTagsIncludeSchema).optional(),
}).strict();

export default ProjectTemplatesToTagsArgsSchema;
