import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateWithoutPrecursorsInputSchema } from './TaskCreateWithoutPrecursorsInputSchema';
import { TaskUncheckedCreateWithoutPrecursorsInputSchema } from './TaskUncheckedCreateWithoutPrecursorsInputSchema';
import { TaskCreateOrConnectWithoutPrecursorsInputSchema } from './TaskCreateOrConnectWithoutPrecursorsInputSchema';
import { TaskUpsertWithoutPrecursorsInputSchema } from './TaskUpsertWithoutPrecursorsInputSchema';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';
import { TaskUpdateToOneWithWhereWithoutPrecursorsInputSchema } from './TaskUpdateToOneWithWhereWithoutPrecursorsInputSchema';
import { TaskUpdateWithoutPrecursorsInputSchema } from './TaskUpdateWithoutPrecursorsInputSchema';
import { TaskUncheckedUpdateWithoutPrecursorsInputSchema } from './TaskUncheckedUpdateWithoutPrecursorsInputSchema';

export const TaskUpdateOneRequiredWithoutPrecursorsNestedInputSchema: z.ZodType<Prisma.TaskUpdateOneRequiredWithoutPrecursorsNestedInput> = z.object({
  create: z.union([ z.lazy(() => TaskCreateWithoutPrecursorsInputSchema),z.lazy(() => TaskUncheckedCreateWithoutPrecursorsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaskCreateOrConnectWithoutPrecursorsInputSchema).optional(),
  upsert: z.lazy(() => TaskUpsertWithoutPrecursorsInputSchema).optional(),
  connect: z.lazy(() => TaskWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TaskUpdateToOneWithWhereWithoutPrecursorsInputSchema),z.lazy(() => TaskUpdateWithoutPrecursorsInputSchema),z.lazy(() => TaskUncheckedUpdateWithoutPrecursorsInputSchema) ]).optional(),
}).strict();

export default TaskUpdateOneRequiredWithoutPrecursorsNestedInputSchema;
