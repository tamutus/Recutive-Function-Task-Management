import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';
import { ProjectUpdateWithoutTasksInputSchema } from './ProjectUpdateWithoutTasksInputSchema';
import { ProjectUncheckedUpdateWithoutTasksInputSchema } from './ProjectUncheckedUpdateWithoutTasksInputSchema';

export const ProjectUpdateToOneWithWhereWithoutTasksInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutTasksInput> = z.object({
  where: z.lazy(() => ProjectWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProjectUpdateWithoutTasksInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutTasksInputSchema) ]),
}).strict();

export default ProjectUpdateToOneWithWhereWithoutTasksInputSchema;
