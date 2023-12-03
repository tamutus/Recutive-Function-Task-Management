import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateWithoutTagsInputSchema } from './TaskCreateWithoutTagsInputSchema';
import { TaskUncheckedCreateWithoutTagsInputSchema } from './TaskUncheckedCreateWithoutTagsInputSchema';
import { TaskCreateOrConnectWithoutTagsInputSchema } from './TaskCreateOrConnectWithoutTagsInputSchema';
import { TaskUpsertWithoutTagsInputSchema } from './TaskUpsertWithoutTagsInputSchema';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';
import { TaskUpdateToOneWithWhereWithoutTagsInputSchema } from './TaskUpdateToOneWithWhereWithoutTagsInputSchema';
import { TaskUpdateWithoutTagsInputSchema } from './TaskUpdateWithoutTagsInputSchema';
import { TaskUncheckedUpdateWithoutTagsInputSchema } from './TaskUncheckedUpdateWithoutTagsInputSchema';

export const TaskUpdateOneRequiredWithoutTagsNestedInputSchema: z.ZodType<Prisma.TaskUpdateOneRequiredWithoutTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => TaskCreateWithoutTagsInputSchema),z.lazy(() => TaskUncheckedCreateWithoutTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaskCreateOrConnectWithoutTagsInputSchema).optional(),
  upsert: z.lazy(() => TaskUpsertWithoutTagsInputSchema).optional(),
  connect: z.lazy(() => TaskWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TaskUpdateToOneWithWhereWithoutTagsInputSchema),z.lazy(() => TaskUpdateWithoutTagsInputSchema),z.lazy(() => TaskUncheckedUpdateWithoutTagsInputSchema) ]).optional(),
}).strict();

export default TaskUpdateOneRequiredWithoutTagsNestedInputSchema;
