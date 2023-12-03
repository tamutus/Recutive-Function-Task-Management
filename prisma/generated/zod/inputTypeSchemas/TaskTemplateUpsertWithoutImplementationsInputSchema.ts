import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateUpdateWithoutImplementationsInputSchema } from './TaskTemplateUpdateWithoutImplementationsInputSchema';
import { TaskTemplateUncheckedUpdateWithoutImplementationsInputSchema } from './TaskTemplateUncheckedUpdateWithoutImplementationsInputSchema';
import { TaskTemplateCreateWithoutImplementationsInputSchema } from './TaskTemplateCreateWithoutImplementationsInputSchema';
import { TaskTemplateUncheckedCreateWithoutImplementationsInputSchema } from './TaskTemplateUncheckedCreateWithoutImplementationsInputSchema';
import { TaskTemplateWhereInputSchema } from './TaskTemplateWhereInputSchema';

export const TaskTemplateUpsertWithoutImplementationsInputSchema: z.ZodType<Prisma.TaskTemplateUpsertWithoutImplementationsInput> = z.object({
  update: z.union([ z.lazy(() => TaskTemplateUpdateWithoutImplementationsInputSchema),z.lazy(() => TaskTemplateUncheckedUpdateWithoutImplementationsInputSchema) ]),
  create: z.union([ z.lazy(() => TaskTemplateCreateWithoutImplementationsInputSchema),z.lazy(() => TaskTemplateUncheckedCreateWithoutImplementationsInputSchema) ]),
  where: z.lazy(() => TaskTemplateWhereInputSchema).optional()
}).strict();

export default TaskTemplateUpsertWithoutImplementationsInputSchema;
