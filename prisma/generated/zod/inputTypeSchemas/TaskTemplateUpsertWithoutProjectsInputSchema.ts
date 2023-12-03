import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateUpdateWithoutProjectsInputSchema } from './TaskTemplateUpdateWithoutProjectsInputSchema';
import { TaskTemplateUncheckedUpdateWithoutProjectsInputSchema } from './TaskTemplateUncheckedUpdateWithoutProjectsInputSchema';
import { TaskTemplateCreateWithoutProjectsInputSchema } from './TaskTemplateCreateWithoutProjectsInputSchema';
import { TaskTemplateUncheckedCreateWithoutProjectsInputSchema } from './TaskTemplateUncheckedCreateWithoutProjectsInputSchema';
import { TaskTemplateWhereInputSchema } from './TaskTemplateWhereInputSchema';

export const TaskTemplateUpsertWithoutProjectsInputSchema: z.ZodType<Prisma.TaskTemplateUpsertWithoutProjectsInput> = z.object({
  update: z.union([ z.lazy(() => TaskTemplateUpdateWithoutProjectsInputSchema),z.lazy(() => TaskTemplateUncheckedUpdateWithoutProjectsInputSchema) ]),
  create: z.union([ z.lazy(() => TaskTemplateCreateWithoutProjectsInputSchema),z.lazy(() => TaskTemplateUncheckedCreateWithoutProjectsInputSchema) ]),
  where: z.lazy(() => TaskTemplateWhereInputSchema).optional()
}).strict();

export default TaskTemplateUpsertWithoutProjectsInputSchema;
