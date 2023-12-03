import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateWithoutProjectsInputSchema } from './TaskCreateWithoutProjectsInputSchema';
import { TaskUncheckedCreateWithoutProjectsInputSchema } from './TaskUncheckedCreateWithoutProjectsInputSchema';
import { TaskCreateOrConnectWithoutProjectsInputSchema } from './TaskCreateOrConnectWithoutProjectsInputSchema';
import { TaskUpsertWithoutProjectsInputSchema } from './TaskUpsertWithoutProjectsInputSchema';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';
import { TaskUpdateToOneWithWhereWithoutProjectsInputSchema } from './TaskUpdateToOneWithWhereWithoutProjectsInputSchema';
import { TaskUpdateWithoutProjectsInputSchema } from './TaskUpdateWithoutProjectsInputSchema';
import { TaskUncheckedUpdateWithoutProjectsInputSchema } from './TaskUncheckedUpdateWithoutProjectsInputSchema';

export const TaskUpdateOneRequiredWithoutProjectsNestedInputSchema: z.ZodType<Prisma.TaskUpdateOneRequiredWithoutProjectsNestedInput> = z.object({
  create: z.union([ z.lazy(() => TaskCreateWithoutProjectsInputSchema),z.lazy(() => TaskUncheckedCreateWithoutProjectsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaskCreateOrConnectWithoutProjectsInputSchema).optional(),
  upsert: z.lazy(() => TaskUpsertWithoutProjectsInputSchema).optional(),
  connect: z.lazy(() => TaskWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TaskUpdateToOneWithWhereWithoutProjectsInputSchema),z.lazy(() => TaskUpdateWithoutProjectsInputSchema),z.lazy(() => TaskUncheckedUpdateWithoutProjectsInputSchema) ]).optional(),
}).strict();

export default TaskUpdateOneRequiredWithoutProjectsNestedInputSchema;
