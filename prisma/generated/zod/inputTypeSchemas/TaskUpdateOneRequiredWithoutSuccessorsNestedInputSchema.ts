import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateWithoutSuccessorsInputSchema } from './TaskCreateWithoutSuccessorsInputSchema';
import { TaskUncheckedCreateWithoutSuccessorsInputSchema } from './TaskUncheckedCreateWithoutSuccessorsInputSchema';
import { TaskCreateOrConnectWithoutSuccessorsInputSchema } from './TaskCreateOrConnectWithoutSuccessorsInputSchema';
import { TaskUpsertWithoutSuccessorsInputSchema } from './TaskUpsertWithoutSuccessorsInputSchema';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';
import { TaskUpdateToOneWithWhereWithoutSuccessorsInputSchema } from './TaskUpdateToOneWithWhereWithoutSuccessorsInputSchema';
import { TaskUpdateWithoutSuccessorsInputSchema } from './TaskUpdateWithoutSuccessorsInputSchema';
import { TaskUncheckedUpdateWithoutSuccessorsInputSchema } from './TaskUncheckedUpdateWithoutSuccessorsInputSchema';

export const TaskUpdateOneRequiredWithoutSuccessorsNestedInputSchema: z.ZodType<Prisma.TaskUpdateOneRequiredWithoutSuccessorsNestedInput> = z.object({
  create: z.union([ z.lazy(() => TaskCreateWithoutSuccessorsInputSchema),z.lazy(() => TaskUncheckedCreateWithoutSuccessorsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaskCreateOrConnectWithoutSuccessorsInputSchema).optional(),
  upsert: z.lazy(() => TaskUpsertWithoutSuccessorsInputSchema).optional(),
  connect: z.lazy(() => TaskWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TaskUpdateToOneWithWhereWithoutSuccessorsInputSchema),z.lazy(() => TaskUpdateWithoutSuccessorsInputSchema),z.lazy(() => TaskUncheckedUpdateWithoutSuccessorsInputSchema) ]).optional(),
}).strict();

export default TaskUpdateOneRequiredWithoutSuccessorsNestedInputSchema;
