import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateWhereUniqueInputSchema } from './TaskTemplateWhereUniqueInputSchema';
import { TaskTemplateCreateWithoutProjectsInputSchema } from './TaskTemplateCreateWithoutProjectsInputSchema';
import { TaskTemplateUncheckedCreateWithoutProjectsInputSchema } from './TaskTemplateUncheckedCreateWithoutProjectsInputSchema';

export const TaskTemplateCreateOrConnectWithoutProjectsInputSchema: z.ZodType<Prisma.TaskTemplateCreateOrConnectWithoutProjectsInput> = z.object({
  where: z.lazy(() => TaskTemplateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TaskTemplateCreateWithoutProjectsInputSchema),z.lazy(() => TaskTemplateUncheckedCreateWithoutProjectsInputSchema) ]),
}).strict();

export default TaskTemplateCreateOrConnectWithoutProjectsInputSchema;
