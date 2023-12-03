import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectTemplateCountOutputTypeSelectSchema } from './ProjectTemplateCountOutputTypeSelectSchema';

export const ProjectTemplateCountOutputTypeArgsSchema: z.ZodType<Prisma.ProjectTemplateCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ProjectTemplateCountOutputTypeSelectSchema).nullish(),
}).strict();

export default ProjectTemplateCountOutputTypeSelectSchema;
