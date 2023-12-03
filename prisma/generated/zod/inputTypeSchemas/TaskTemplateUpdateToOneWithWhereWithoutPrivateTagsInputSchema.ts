import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateWhereInputSchema } from './TaskTemplateWhereInputSchema';
import { TaskTemplateUpdateWithoutPrivateTagsInputSchema } from './TaskTemplateUpdateWithoutPrivateTagsInputSchema';
import { TaskTemplateUncheckedUpdateWithoutPrivateTagsInputSchema } from './TaskTemplateUncheckedUpdateWithoutPrivateTagsInputSchema';

export const TaskTemplateUpdateToOneWithWhereWithoutPrivateTagsInputSchema: z.ZodType<Prisma.TaskTemplateUpdateToOneWithWhereWithoutPrivateTagsInput> = z.object({
  where: z.lazy(() => TaskTemplateWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TaskTemplateUpdateWithoutPrivateTagsInputSchema),z.lazy(() => TaskTemplateUncheckedUpdateWithoutPrivateTagsInputSchema) ]),
}).strict();

export default TaskTemplateUpdateToOneWithWhereWithoutPrivateTagsInputSchema;
