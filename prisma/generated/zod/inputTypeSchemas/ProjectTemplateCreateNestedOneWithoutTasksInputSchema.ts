import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateCreateWithoutTasksInputSchema } from './ProjectTemplateCreateWithoutTasksInputSchema';
import { ProjectTemplateUncheckedCreateWithoutTasksInputSchema } from './ProjectTemplateUncheckedCreateWithoutTasksInputSchema';
import { ProjectTemplateCreateOrConnectWithoutTasksInputSchema } from './ProjectTemplateCreateOrConnectWithoutTasksInputSchema';
import { ProjectTemplateWhereUniqueInputSchema } from './ProjectTemplateWhereUniqueInputSchema';

export const ProjectTemplateCreateNestedOneWithoutTasksInputSchema: z.ZodType<Prisma.ProjectTemplateCreateNestedOneWithoutTasksInput> = z.object({
  create: z.union([ z.lazy(() => ProjectTemplateCreateWithoutTasksInputSchema),z.lazy(() => ProjectTemplateUncheckedCreateWithoutTasksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectTemplateCreateOrConnectWithoutTasksInputSchema).optional(),
  connect: z.lazy(() => ProjectTemplateWhereUniqueInputSchema).optional()
}).strict();

export default ProjectTemplateCreateNestedOneWithoutTasksInputSchema;
