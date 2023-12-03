import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateWhereUniqueInputSchema } from './TaskTemplateWhereUniqueInputSchema';
import { TaskTemplateCreateWithoutSuccessorsInputSchema } from './TaskTemplateCreateWithoutSuccessorsInputSchema';
import { TaskTemplateUncheckedCreateWithoutSuccessorsInputSchema } from './TaskTemplateUncheckedCreateWithoutSuccessorsInputSchema';

export const TaskTemplateCreateOrConnectWithoutSuccessorsInputSchema: z.ZodType<Prisma.TaskTemplateCreateOrConnectWithoutSuccessorsInput> = z.object({
  where: z.lazy(() => TaskTemplateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TaskTemplateCreateWithoutSuccessorsInputSchema),z.lazy(() => TaskTemplateUncheckedCreateWithoutSuccessorsInputSchema) ]),
}).strict();

export default TaskTemplateCreateOrConnectWithoutSuccessorsInputSchema;
