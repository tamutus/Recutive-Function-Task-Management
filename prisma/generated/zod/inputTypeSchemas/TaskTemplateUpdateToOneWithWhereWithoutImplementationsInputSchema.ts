import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateWhereInputSchema } from './TaskTemplateWhereInputSchema';
import { TaskTemplateUpdateWithoutImplementationsInputSchema } from './TaskTemplateUpdateWithoutImplementationsInputSchema';
import { TaskTemplateUncheckedUpdateWithoutImplementationsInputSchema } from './TaskTemplateUncheckedUpdateWithoutImplementationsInputSchema';

export const TaskTemplateUpdateToOneWithWhereWithoutImplementationsInputSchema: z.ZodType<Prisma.TaskTemplateUpdateToOneWithWhereWithoutImplementationsInput> = z.object({
  where: z.lazy(() => TaskTemplateWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TaskTemplateUpdateWithoutImplementationsInputSchema),z.lazy(() => TaskTemplateUncheckedUpdateWithoutImplementationsInputSchema) ]),
}).strict();

export default TaskTemplateUpdateToOneWithWhereWithoutImplementationsInputSchema;
