import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateWhereInputSchema } from './TaskTemplateWhereInputSchema';
import { TaskTemplateUpdateWithoutTagsInputSchema } from './TaskTemplateUpdateWithoutTagsInputSchema';
import { TaskTemplateUncheckedUpdateWithoutTagsInputSchema } from './TaskTemplateUncheckedUpdateWithoutTagsInputSchema';

export const TaskTemplateUpdateToOneWithWhereWithoutTagsInputSchema: z.ZodType<Prisma.TaskTemplateUpdateToOneWithWhereWithoutTagsInput> = z.object({
  where: z.lazy(() => TaskTemplateWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TaskTemplateUpdateWithoutTagsInputSchema),z.lazy(() => TaskTemplateUncheckedUpdateWithoutTagsInputSchema) ]),
}).strict();

export default TaskTemplateUpdateToOneWithWhereWithoutTagsInputSchema;
