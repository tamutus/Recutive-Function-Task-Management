import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateCreateWithoutSuccessorsInputSchema } from './TaskTemplateCreateWithoutSuccessorsInputSchema';
import { TaskTemplateUncheckedCreateWithoutSuccessorsInputSchema } from './TaskTemplateUncheckedCreateWithoutSuccessorsInputSchema';
import { TaskTemplateCreateOrConnectWithoutSuccessorsInputSchema } from './TaskTemplateCreateOrConnectWithoutSuccessorsInputSchema';
import { TaskTemplateWhereUniqueInputSchema } from './TaskTemplateWhereUniqueInputSchema';

export const TaskTemplateCreateNestedOneWithoutSuccessorsInputSchema: z.ZodType<Prisma.TaskTemplateCreateNestedOneWithoutSuccessorsInput> = z.object({
  create: z.union([ z.lazy(() => TaskTemplateCreateWithoutSuccessorsInputSchema),z.lazy(() => TaskTemplateUncheckedCreateWithoutSuccessorsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaskTemplateCreateOrConnectWithoutSuccessorsInputSchema).optional(),
  connect: z.lazy(() => TaskTemplateWhereUniqueInputSchema).optional()
}).strict();

export default TaskTemplateCreateNestedOneWithoutSuccessorsInputSchema;
