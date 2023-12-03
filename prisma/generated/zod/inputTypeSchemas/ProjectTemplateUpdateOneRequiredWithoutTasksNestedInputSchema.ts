import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateCreateWithoutTasksInputSchema } from './ProjectTemplateCreateWithoutTasksInputSchema';
import { ProjectTemplateUncheckedCreateWithoutTasksInputSchema } from './ProjectTemplateUncheckedCreateWithoutTasksInputSchema';
import { ProjectTemplateCreateOrConnectWithoutTasksInputSchema } from './ProjectTemplateCreateOrConnectWithoutTasksInputSchema';
import { ProjectTemplateUpsertWithoutTasksInputSchema } from './ProjectTemplateUpsertWithoutTasksInputSchema';
import { ProjectTemplateWhereUniqueInputSchema } from './ProjectTemplateWhereUniqueInputSchema';
import { ProjectTemplateUpdateToOneWithWhereWithoutTasksInputSchema } from './ProjectTemplateUpdateToOneWithWhereWithoutTasksInputSchema';
import { ProjectTemplateUpdateWithoutTasksInputSchema } from './ProjectTemplateUpdateWithoutTasksInputSchema';
import { ProjectTemplateUncheckedUpdateWithoutTasksInputSchema } from './ProjectTemplateUncheckedUpdateWithoutTasksInputSchema';

export const ProjectTemplateUpdateOneRequiredWithoutTasksNestedInputSchema: z.ZodType<Prisma.ProjectTemplateUpdateOneRequiredWithoutTasksNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectTemplateCreateWithoutTasksInputSchema),z.lazy(() => ProjectTemplateUncheckedCreateWithoutTasksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectTemplateCreateOrConnectWithoutTasksInputSchema).optional(),
  upsert: z.lazy(() => ProjectTemplateUpsertWithoutTasksInputSchema).optional(),
  connect: z.lazy(() => ProjectTemplateWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProjectTemplateUpdateToOneWithWhereWithoutTasksInputSchema),z.lazy(() => ProjectTemplateUpdateWithoutTasksInputSchema),z.lazy(() => ProjectTemplateUncheckedUpdateWithoutTasksInputSchema) ]).optional(),
}).strict();

export default ProjectTemplateUpdateOneRequiredWithoutTasksNestedInputSchema;
