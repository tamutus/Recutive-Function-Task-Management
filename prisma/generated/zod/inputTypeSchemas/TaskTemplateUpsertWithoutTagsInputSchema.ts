import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateUpdateWithoutTagsInputSchema } from './TaskTemplateUpdateWithoutTagsInputSchema';
import { TaskTemplateUncheckedUpdateWithoutTagsInputSchema } from './TaskTemplateUncheckedUpdateWithoutTagsInputSchema';
import { TaskTemplateCreateWithoutTagsInputSchema } from './TaskTemplateCreateWithoutTagsInputSchema';
import { TaskTemplateUncheckedCreateWithoutTagsInputSchema } from './TaskTemplateUncheckedCreateWithoutTagsInputSchema';
import { TaskTemplateWhereInputSchema } from './TaskTemplateWhereInputSchema';

export const TaskTemplateUpsertWithoutTagsInputSchema: z.ZodType<Prisma.TaskTemplateUpsertWithoutTagsInput> = z.object({
  update: z.union([ z.lazy(() => TaskTemplateUpdateWithoutTagsInputSchema),z.lazy(() => TaskTemplateUncheckedUpdateWithoutTagsInputSchema) ]),
  create: z.union([ z.lazy(() => TaskTemplateCreateWithoutTagsInputSchema),z.lazy(() => TaskTemplateUncheckedCreateWithoutTagsInputSchema) ]),
  where: z.lazy(() => TaskTemplateWhereInputSchema).optional()
}).strict();

export default TaskTemplateUpsertWithoutTagsInputSchema;
