import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateWithoutPrivateTagsInputSchema } from './TaskCreateWithoutPrivateTagsInputSchema';
import { TaskUncheckedCreateWithoutPrivateTagsInputSchema } from './TaskUncheckedCreateWithoutPrivateTagsInputSchema';
import { TaskCreateOrConnectWithoutPrivateTagsInputSchema } from './TaskCreateOrConnectWithoutPrivateTagsInputSchema';
import { TaskUpsertWithoutPrivateTagsInputSchema } from './TaskUpsertWithoutPrivateTagsInputSchema';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';
import { TaskUpdateToOneWithWhereWithoutPrivateTagsInputSchema } from './TaskUpdateToOneWithWhereWithoutPrivateTagsInputSchema';
import { TaskUpdateWithoutPrivateTagsInputSchema } from './TaskUpdateWithoutPrivateTagsInputSchema';
import { TaskUncheckedUpdateWithoutPrivateTagsInputSchema } from './TaskUncheckedUpdateWithoutPrivateTagsInputSchema';

export const TaskUpdateOneRequiredWithoutPrivateTagsNestedInputSchema: z.ZodType<Prisma.TaskUpdateOneRequiredWithoutPrivateTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => TaskCreateWithoutPrivateTagsInputSchema),z.lazy(() => TaskUncheckedCreateWithoutPrivateTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaskCreateOrConnectWithoutPrivateTagsInputSchema).optional(),
  upsert: z.lazy(() => TaskUpsertWithoutPrivateTagsInputSchema).optional(),
  connect: z.lazy(() => TaskWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TaskUpdateToOneWithWhereWithoutPrivateTagsInputSchema),z.lazy(() => TaskUpdateWithoutPrivateTagsInputSchema),z.lazy(() => TaskUncheckedUpdateWithoutPrivateTagsInputSchema) ]).optional(),
}).strict();

export default TaskUpdateOneRequiredWithoutPrivateTagsNestedInputSchema;
