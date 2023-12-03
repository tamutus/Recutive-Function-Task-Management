import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateCreateWithoutImplementationsInputSchema } from './TaskTemplateCreateWithoutImplementationsInputSchema';
import { TaskTemplateUncheckedCreateWithoutImplementationsInputSchema } from './TaskTemplateUncheckedCreateWithoutImplementationsInputSchema';
import { TaskTemplateCreateOrConnectWithoutImplementationsInputSchema } from './TaskTemplateCreateOrConnectWithoutImplementationsInputSchema';
import { TaskTemplateWhereUniqueInputSchema } from './TaskTemplateWhereUniqueInputSchema';

export const TaskTemplateCreateNestedOneWithoutImplementationsInputSchema: z.ZodType<Prisma.TaskTemplateCreateNestedOneWithoutImplementationsInput> = z.object({
  create: z.union([ z.lazy(() => TaskTemplateCreateWithoutImplementationsInputSchema),z.lazy(() => TaskTemplateUncheckedCreateWithoutImplementationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaskTemplateCreateOrConnectWithoutImplementationsInputSchema).optional(),
  connect: z.lazy(() => TaskTemplateWhereUniqueInputSchema).optional()
}).strict();

export default TaskTemplateCreateNestedOneWithoutImplementationsInputSchema;
