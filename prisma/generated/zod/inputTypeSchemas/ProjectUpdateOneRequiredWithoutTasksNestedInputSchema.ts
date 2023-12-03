import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectCreateWithoutTasksInputSchema } from './ProjectCreateWithoutTasksInputSchema';
import { ProjectUncheckedCreateWithoutTasksInputSchema } from './ProjectUncheckedCreateWithoutTasksInputSchema';
import { ProjectCreateOrConnectWithoutTasksInputSchema } from './ProjectCreateOrConnectWithoutTasksInputSchema';
import { ProjectUpsertWithoutTasksInputSchema } from './ProjectUpsertWithoutTasksInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectUpdateToOneWithWhereWithoutTasksInputSchema } from './ProjectUpdateToOneWithWhereWithoutTasksInputSchema';
import { ProjectUpdateWithoutTasksInputSchema } from './ProjectUpdateWithoutTasksInputSchema';
import { ProjectUncheckedUpdateWithoutTasksInputSchema } from './ProjectUncheckedUpdateWithoutTasksInputSchema';

export const ProjectUpdateOneRequiredWithoutTasksNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutTasksNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutTasksInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutTasksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutTasksInputSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutTasksInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProjectUpdateToOneWithWhereWithoutTasksInputSchema),z.lazy(() => ProjectUpdateWithoutTasksInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutTasksInputSchema) ]).optional(),
}).strict();

export default ProjectUpdateOneRequiredWithoutTasksNestedInputSchema;
