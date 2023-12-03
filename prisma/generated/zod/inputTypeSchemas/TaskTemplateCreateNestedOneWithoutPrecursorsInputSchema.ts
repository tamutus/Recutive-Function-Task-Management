import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateCreateWithoutPrecursorsInputSchema } from './TaskTemplateCreateWithoutPrecursorsInputSchema';
import { TaskTemplateUncheckedCreateWithoutPrecursorsInputSchema } from './TaskTemplateUncheckedCreateWithoutPrecursorsInputSchema';
import { TaskTemplateCreateOrConnectWithoutPrecursorsInputSchema } from './TaskTemplateCreateOrConnectWithoutPrecursorsInputSchema';
import { TaskTemplateWhereUniqueInputSchema } from './TaskTemplateWhereUniqueInputSchema';

export const TaskTemplateCreateNestedOneWithoutPrecursorsInputSchema: z.ZodType<Prisma.TaskTemplateCreateNestedOneWithoutPrecursorsInput> = z.object({
  create: z.union([ z.lazy(() => TaskTemplateCreateWithoutPrecursorsInputSchema),z.lazy(() => TaskTemplateUncheckedCreateWithoutPrecursorsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaskTemplateCreateOrConnectWithoutPrecursorsInputSchema).optional(),
  connect: z.lazy(() => TaskTemplateWhereUniqueInputSchema).optional()
}).strict();

export default TaskTemplateCreateNestedOneWithoutPrecursorsInputSchema;
