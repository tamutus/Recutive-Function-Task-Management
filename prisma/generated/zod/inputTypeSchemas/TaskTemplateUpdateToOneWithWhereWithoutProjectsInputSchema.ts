import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateWhereInputSchema } from './TaskTemplateWhereInputSchema';
import { TaskTemplateUpdateWithoutProjectsInputSchema } from './TaskTemplateUpdateWithoutProjectsInputSchema';
import { TaskTemplateUncheckedUpdateWithoutProjectsInputSchema } from './TaskTemplateUncheckedUpdateWithoutProjectsInputSchema';

export const TaskTemplateUpdateToOneWithWhereWithoutProjectsInputSchema: z.ZodType<Prisma.TaskTemplateUpdateToOneWithWhereWithoutProjectsInput> = z.object({
  where: z.lazy(() => TaskTemplateWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TaskTemplateUpdateWithoutProjectsInputSchema),z.lazy(() => TaskTemplateUncheckedUpdateWithoutProjectsInputSchema) ]),
}).strict();

export default TaskTemplateUpdateToOneWithWhereWithoutProjectsInputSchema;
