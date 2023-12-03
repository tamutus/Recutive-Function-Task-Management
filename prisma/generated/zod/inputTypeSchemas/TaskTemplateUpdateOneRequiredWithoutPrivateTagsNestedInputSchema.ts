import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateCreateWithoutPrivateTagsInputSchema } from './TaskTemplateCreateWithoutPrivateTagsInputSchema';
import { TaskTemplateUncheckedCreateWithoutPrivateTagsInputSchema } from './TaskTemplateUncheckedCreateWithoutPrivateTagsInputSchema';
import { TaskTemplateCreateOrConnectWithoutPrivateTagsInputSchema } from './TaskTemplateCreateOrConnectWithoutPrivateTagsInputSchema';
import { TaskTemplateUpsertWithoutPrivateTagsInputSchema } from './TaskTemplateUpsertWithoutPrivateTagsInputSchema';
import { TaskTemplateWhereUniqueInputSchema } from './TaskTemplateWhereUniqueInputSchema';
import { TaskTemplateUpdateToOneWithWhereWithoutPrivateTagsInputSchema } from './TaskTemplateUpdateToOneWithWhereWithoutPrivateTagsInputSchema';
import { TaskTemplateUpdateWithoutPrivateTagsInputSchema } from './TaskTemplateUpdateWithoutPrivateTagsInputSchema';
import { TaskTemplateUncheckedUpdateWithoutPrivateTagsInputSchema } from './TaskTemplateUncheckedUpdateWithoutPrivateTagsInputSchema';

export const TaskTemplateUpdateOneRequiredWithoutPrivateTagsNestedInputSchema: z.ZodType<Prisma.TaskTemplateUpdateOneRequiredWithoutPrivateTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => TaskTemplateCreateWithoutPrivateTagsInputSchema),z.lazy(() => TaskTemplateUncheckedCreateWithoutPrivateTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaskTemplateCreateOrConnectWithoutPrivateTagsInputSchema).optional(),
  upsert: z.lazy(() => TaskTemplateUpsertWithoutPrivateTagsInputSchema).optional(),
  connect: z.lazy(() => TaskTemplateWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TaskTemplateUpdateToOneWithWhereWithoutPrivateTagsInputSchema),z.lazy(() => TaskTemplateUpdateWithoutPrivateTagsInputSchema),z.lazy(() => TaskTemplateUncheckedUpdateWithoutPrivateTagsInputSchema) ]).optional(),
}).strict();

export default TaskTemplateUpdateOneRequiredWithoutPrivateTagsNestedInputSchema;
