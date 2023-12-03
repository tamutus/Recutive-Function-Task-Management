import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateWhereInputSchema } from './ProjectTemplateWhereInputSchema';
import { ProjectTemplateUpdateWithoutTasksInputSchema } from './ProjectTemplateUpdateWithoutTasksInputSchema';
import { ProjectTemplateUncheckedUpdateWithoutTasksInputSchema } from './ProjectTemplateUncheckedUpdateWithoutTasksInputSchema';

export const ProjectTemplateUpdateToOneWithWhereWithoutTasksInputSchema: z.ZodType<Prisma.ProjectTemplateUpdateToOneWithWhereWithoutTasksInput> = z.object({
  where: z.lazy(() => ProjectTemplateWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProjectTemplateUpdateWithoutTasksInputSchema),z.lazy(() => ProjectTemplateUncheckedUpdateWithoutTasksInputSchema) ]),
}).strict();

export default ProjectTemplateUpdateToOneWithWhereWithoutTasksInputSchema;
