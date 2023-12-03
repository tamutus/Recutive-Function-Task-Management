import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateWithoutPrioritiesInputSchema } from './TaskCreateWithoutPrioritiesInputSchema';
import { TaskUncheckedCreateWithoutPrioritiesInputSchema } from './TaskUncheckedCreateWithoutPrioritiesInputSchema';
import { TaskCreateOrConnectWithoutPrioritiesInputSchema } from './TaskCreateOrConnectWithoutPrioritiesInputSchema';
import { TaskUpsertWithoutPrioritiesInputSchema } from './TaskUpsertWithoutPrioritiesInputSchema';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';
import { TaskUpdateToOneWithWhereWithoutPrioritiesInputSchema } from './TaskUpdateToOneWithWhereWithoutPrioritiesInputSchema';
import { TaskUpdateWithoutPrioritiesInputSchema } from './TaskUpdateWithoutPrioritiesInputSchema';
import { TaskUncheckedUpdateWithoutPrioritiesInputSchema } from './TaskUncheckedUpdateWithoutPrioritiesInputSchema';

export const TaskUpdateOneRequiredWithoutPrioritiesNestedInputSchema: z.ZodType<Prisma.TaskUpdateOneRequiredWithoutPrioritiesNestedInput> = z.object({
  create: z.union([ z.lazy(() => TaskCreateWithoutPrioritiesInputSchema),z.lazy(() => TaskUncheckedCreateWithoutPrioritiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaskCreateOrConnectWithoutPrioritiesInputSchema).optional(),
  upsert: z.lazy(() => TaskUpsertWithoutPrioritiesInputSchema).optional(),
  connect: z.lazy(() => TaskWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TaskUpdateToOneWithWhereWithoutPrioritiesInputSchema),z.lazy(() => TaskUpdateWithoutPrioritiesInputSchema),z.lazy(() => TaskUncheckedUpdateWithoutPrioritiesInputSchema) ]).optional(),
}).strict();

export default TaskUpdateOneRequiredWithoutPrioritiesNestedInputSchema;
