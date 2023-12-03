import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateUpdateWithoutTasksInputSchema } from './ProjectTemplateUpdateWithoutTasksInputSchema';
import { ProjectTemplateUncheckedUpdateWithoutTasksInputSchema } from './ProjectTemplateUncheckedUpdateWithoutTasksInputSchema';
import { ProjectTemplateCreateWithoutTasksInputSchema } from './ProjectTemplateCreateWithoutTasksInputSchema';
import { ProjectTemplateUncheckedCreateWithoutTasksInputSchema } from './ProjectTemplateUncheckedCreateWithoutTasksInputSchema';
import { ProjectTemplateWhereInputSchema } from './ProjectTemplateWhereInputSchema';

export const ProjectTemplateUpsertWithoutTasksInputSchema: z.ZodType<Prisma.ProjectTemplateUpsertWithoutTasksInput> = z.object({
  update: z.union([ z.lazy(() => ProjectTemplateUpdateWithoutTasksInputSchema),z.lazy(() => ProjectTemplateUncheckedUpdateWithoutTasksInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectTemplateCreateWithoutTasksInputSchema),z.lazy(() => ProjectTemplateUncheckedCreateWithoutTasksInputSchema) ]),
  where: z.lazy(() => ProjectTemplateWhereInputSchema).optional()
}).strict();

export default ProjectTemplateUpsertWithoutTasksInputSchema;
