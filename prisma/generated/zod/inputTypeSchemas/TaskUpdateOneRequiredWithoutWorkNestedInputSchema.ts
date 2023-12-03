import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateWithoutWorkInputSchema } from './TaskCreateWithoutWorkInputSchema';
import { TaskUncheckedCreateWithoutWorkInputSchema } from './TaskUncheckedCreateWithoutWorkInputSchema';
import { TaskCreateOrConnectWithoutWorkInputSchema } from './TaskCreateOrConnectWithoutWorkInputSchema';
import { TaskUpsertWithoutWorkInputSchema } from './TaskUpsertWithoutWorkInputSchema';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';
import { TaskUpdateToOneWithWhereWithoutWorkInputSchema } from './TaskUpdateToOneWithWhereWithoutWorkInputSchema';
import { TaskUpdateWithoutWorkInputSchema } from './TaskUpdateWithoutWorkInputSchema';
import { TaskUncheckedUpdateWithoutWorkInputSchema } from './TaskUncheckedUpdateWithoutWorkInputSchema';

export const TaskUpdateOneRequiredWithoutWorkNestedInputSchema: z.ZodType<Prisma.TaskUpdateOneRequiredWithoutWorkNestedInput> = z.object({
  create: z.union([ z.lazy(() => TaskCreateWithoutWorkInputSchema),z.lazy(() => TaskUncheckedCreateWithoutWorkInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaskCreateOrConnectWithoutWorkInputSchema).optional(),
  upsert: z.lazy(() => TaskUpsertWithoutWorkInputSchema).optional(),
  connect: z.lazy(() => TaskWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TaskUpdateToOneWithWhereWithoutWorkInputSchema),z.lazy(() => TaskUpdateWithoutWorkInputSchema),z.lazy(() => TaskUncheckedUpdateWithoutWorkInputSchema) ]).optional(),
}).strict();

export default TaskUpdateOneRequiredWithoutWorkNestedInputSchema;
