import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateUpdateWithoutPrivateTagsInputSchema } from './TaskTemplateUpdateWithoutPrivateTagsInputSchema';
import { TaskTemplateUncheckedUpdateWithoutPrivateTagsInputSchema } from './TaskTemplateUncheckedUpdateWithoutPrivateTagsInputSchema';
import { TaskTemplateCreateWithoutPrivateTagsInputSchema } from './TaskTemplateCreateWithoutPrivateTagsInputSchema';
import { TaskTemplateUncheckedCreateWithoutPrivateTagsInputSchema } from './TaskTemplateUncheckedCreateWithoutPrivateTagsInputSchema';
import { TaskTemplateWhereInputSchema } from './TaskTemplateWhereInputSchema';

export const TaskTemplateUpsertWithoutPrivateTagsInputSchema: z.ZodType<Prisma.TaskTemplateUpsertWithoutPrivateTagsInput> = z.object({
  update: z.union([ z.lazy(() => TaskTemplateUpdateWithoutPrivateTagsInputSchema),z.lazy(() => TaskTemplateUncheckedUpdateWithoutPrivateTagsInputSchema) ]),
  create: z.union([ z.lazy(() => TaskTemplateCreateWithoutPrivateTagsInputSchema),z.lazy(() => TaskTemplateUncheckedCreateWithoutPrivateTagsInputSchema) ]),
  where: z.lazy(() => TaskTemplateWhereInputSchema).optional()
}).strict();

export default TaskTemplateUpsertWithoutPrivateTagsInputSchema;
