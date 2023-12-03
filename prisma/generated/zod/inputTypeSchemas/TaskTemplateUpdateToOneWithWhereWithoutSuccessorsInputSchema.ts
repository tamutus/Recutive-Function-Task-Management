import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateWhereInputSchema } from './TaskTemplateWhereInputSchema';
import { TaskTemplateUpdateWithoutSuccessorsInputSchema } from './TaskTemplateUpdateWithoutSuccessorsInputSchema';
import { TaskTemplateUncheckedUpdateWithoutSuccessorsInputSchema } from './TaskTemplateUncheckedUpdateWithoutSuccessorsInputSchema';

export const TaskTemplateUpdateToOneWithWhereWithoutSuccessorsInputSchema: z.ZodType<Prisma.TaskTemplateUpdateToOneWithWhereWithoutSuccessorsInput> = z.object({
  where: z.lazy(() => TaskTemplateWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TaskTemplateUpdateWithoutSuccessorsInputSchema),z.lazy(() => TaskTemplateUncheckedUpdateWithoutSuccessorsInputSchema) ]),
}).strict();

export default TaskTemplateUpdateToOneWithWhereWithoutSuccessorsInputSchema;
