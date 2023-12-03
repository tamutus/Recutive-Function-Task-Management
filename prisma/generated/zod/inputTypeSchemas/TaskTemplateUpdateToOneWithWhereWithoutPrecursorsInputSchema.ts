import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateWhereInputSchema } from './TaskTemplateWhereInputSchema';
import { TaskTemplateUpdateWithoutPrecursorsInputSchema } from './TaskTemplateUpdateWithoutPrecursorsInputSchema';
import { TaskTemplateUncheckedUpdateWithoutPrecursorsInputSchema } from './TaskTemplateUncheckedUpdateWithoutPrecursorsInputSchema';

export const TaskTemplateUpdateToOneWithWhereWithoutPrecursorsInputSchema: z.ZodType<Prisma.TaskTemplateUpdateToOneWithWhereWithoutPrecursorsInput> = z.object({
  where: z.lazy(() => TaskTemplateWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TaskTemplateUpdateWithoutPrecursorsInputSchema),z.lazy(() => TaskTemplateUncheckedUpdateWithoutPrecursorsInputSchema) ]),
}).strict();

export default TaskTemplateUpdateToOneWithWhereWithoutPrecursorsInputSchema;
