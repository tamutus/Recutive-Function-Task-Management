import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateCreateWithoutProjectsInputSchema } from './TaskTemplateCreateWithoutProjectsInputSchema';
import { TaskTemplateUncheckedCreateWithoutProjectsInputSchema } from './TaskTemplateUncheckedCreateWithoutProjectsInputSchema';
import { TaskTemplateCreateOrConnectWithoutProjectsInputSchema } from './TaskTemplateCreateOrConnectWithoutProjectsInputSchema';
import { TaskTemplateWhereUniqueInputSchema } from './TaskTemplateWhereUniqueInputSchema';

export const TaskTemplateCreateNestedOneWithoutProjectsInputSchema: z.ZodType<Prisma.TaskTemplateCreateNestedOneWithoutProjectsInput> = z.object({
  create: z.union([ z.lazy(() => TaskTemplateCreateWithoutProjectsInputSchema),z.lazy(() => TaskTemplateUncheckedCreateWithoutProjectsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaskTemplateCreateOrConnectWithoutProjectsInputSchema).optional(),
  connect: z.lazy(() => TaskTemplateWhereUniqueInputSchema).optional()
}).strict();

export default TaskTemplateCreateNestedOneWithoutProjectsInputSchema;
