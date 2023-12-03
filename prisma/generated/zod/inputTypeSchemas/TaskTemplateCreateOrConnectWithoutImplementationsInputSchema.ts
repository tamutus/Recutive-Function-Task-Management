import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateWhereUniqueInputSchema } from './TaskTemplateWhereUniqueInputSchema';
import { TaskTemplateCreateWithoutImplementationsInputSchema } from './TaskTemplateCreateWithoutImplementationsInputSchema';
import { TaskTemplateUncheckedCreateWithoutImplementationsInputSchema } from './TaskTemplateUncheckedCreateWithoutImplementationsInputSchema';

export const TaskTemplateCreateOrConnectWithoutImplementationsInputSchema: z.ZodType<Prisma.TaskTemplateCreateOrConnectWithoutImplementationsInput> = z.object({
  where: z.lazy(() => TaskTemplateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TaskTemplateCreateWithoutImplementationsInputSchema),z.lazy(() => TaskTemplateUncheckedCreateWithoutImplementationsInputSchema) ]),
}).strict();

export default TaskTemplateCreateOrConnectWithoutImplementationsInputSchema;
