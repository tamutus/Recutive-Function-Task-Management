import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectTemplateSelectSchema } from '../inputTypeSchemas/ProjectTemplateSelectSchema';
import { ProjectTemplateIncludeSchema } from '../inputTypeSchemas/ProjectTemplateIncludeSchema';

export const ProjectTemplateArgsSchema: z.ZodType<Prisma.ProjectTemplateDefaultArgs> = z.object({
  select: z.lazy(() => ProjectTemplateSelectSchema).optional(),
  include: z.lazy(() => ProjectTemplateIncludeSchema).optional(),
}).strict();

export default ProjectTemplateArgsSchema;
