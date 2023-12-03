import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateWhereUniqueInputSchema } from './TaskTemplateWhereUniqueInputSchema';
import { TaskTemplateCreateWithoutPrecursorsInputSchema } from './TaskTemplateCreateWithoutPrecursorsInputSchema';
import { TaskTemplateUncheckedCreateWithoutPrecursorsInputSchema } from './TaskTemplateUncheckedCreateWithoutPrecursorsInputSchema';

export const TaskTemplateCreateOrConnectWithoutPrecursorsInputSchema: z.ZodType<Prisma.TaskTemplateCreateOrConnectWithoutPrecursorsInput> = z.object({
  where: z.lazy(() => TaskTemplateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TaskTemplateCreateWithoutPrecursorsInputSchema),z.lazy(() => TaskTemplateUncheckedCreateWithoutPrecursorsInputSchema) ]),
}).strict();

export default TaskTemplateCreateOrConnectWithoutPrecursorsInputSchema;
