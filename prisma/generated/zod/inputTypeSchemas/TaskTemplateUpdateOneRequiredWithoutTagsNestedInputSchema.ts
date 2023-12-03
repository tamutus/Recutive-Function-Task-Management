import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateCreateWithoutTagsInputSchema } from './TaskTemplateCreateWithoutTagsInputSchema';
import { TaskTemplateUncheckedCreateWithoutTagsInputSchema } from './TaskTemplateUncheckedCreateWithoutTagsInputSchema';
import { TaskTemplateCreateOrConnectWithoutTagsInputSchema } from './TaskTemplateCreateOrConnectWithoutTagsInputSchema';
import { TaskTemplateUpsertWithoutTagsInputSchema } from './TaskTemplateUpsertWithoutTagsInputSchema';
import { TaskTemplateWhereUniqueInputSchema } from './TaskTemplateWhereUniqueInputSchema';
import { TaskTemplateUpdateToOneWithWhereWithoutTagsInputSchema } from './TaskTemplateUpdateToOneWithWhereWithoutTagsInputSchema';
import { TaskTemplateUpdateWithoutTagsInputSchema } from './TaskTemplateUpdateWithoutTagsInputSchema';
import { TaskTemplateUncheckedUpdateWithoutTagsInputSchema } from './TaskTemplateUncheckedUpdateWithoutTagsInputSchema';

export const TaskTemplateUpdateOneRequiredWithoutTagsNestedInputSchema: z.ZodType<Prisma.TaskTemplateUpdateOneRequiredWithoutTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => TaskTemplateCreateWithoutTagsInputSchema),z.lazy(() => TaskTemplateUncheckedCreateWithoutTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaskTemplateCreateOrConnectWithoutTagsInputSchema).optional(),
  upsert: z.lazy(() => TaskTemplateUpsertWithoutTagsInputSchema).optional(),
  connect: z.lazy(() => TaskTemplateWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TaskTemplateUpdateToOneWithWhereWithoutTagsInputSchema),z.lazy(() => TaskTemplateUpdateWithoutTagsInputSchema),z.lazy(() => TaskTemplateUncheckedUpdateWithoutTagsInputSchema) ]).optional(),
}).strict();

export default TaskTemplateUpdateOneRequiredWithoutTagsNestedInputSchema;
