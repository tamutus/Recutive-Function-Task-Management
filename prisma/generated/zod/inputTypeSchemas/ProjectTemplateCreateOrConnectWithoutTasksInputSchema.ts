import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateWhereUniqueInputSchema } from './ProjectTemplateWhereUniqueInputSchema';
import { ProjectTemplateCreateWithoutTasksInputSchema } from './ProjectTemplateCreateWithoutTasksInputSchema';
import { ProjectTemplateUncheckedCreateWithoutTasksInputSchema } from './ProjectTemplateUncheckedCreateWithoutTasksInputSchema';

export const ProjectTemplateCreateOrConnectWithoutTasksInputSchema: z.ZodType<Prisma.ProjectTemplateCreateOrConnectWithoutTasksInput> = z.object({
  where: z.lazy(() => ProjectTemplateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectTemplateCreateWithoutTasksInputSchema),z.lazy(() => ProjectTemplateUncheckedCreateWithoutTasksInputSchema) ]),
}).strict();

export default ProjectTemplateCreateOrConnectWithoutTasksInputSchema;
