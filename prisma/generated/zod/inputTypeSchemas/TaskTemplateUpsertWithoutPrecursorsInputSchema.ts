import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateUpdateWithoutPrecursorsInputSchema } from './TaskTemplateUpdateWithoutPrecursorsInputSchema';
import { TaskTemplateUncheckedUpdateWithoutPrecursorsInputSchema } from './TaskTemplateUncheckedUpdateWithoutPrecursorsInputSchema';
import { TaskTemplateCreateWithoutPrecursorsInputSchema } from './TaskTemplateCreateWithoutPrecursorsInputSchema';
import { TaskTemplateUncheckedCreateWithoutPrecursorsInputSchema } from './TaskTemplateUncheckedCreateWithoutPrecursorsInputSchema';
import { TaskTemplateWhereInputSchema } from './TaskTemplateWhereInputSchema';

export const TaskTemplateUpsertWithoutPrecursorsInputSchema: z.ZodType<Prisma.TaskTemplateUpsertWithoutPrecursorsInput> = z.object({
  update: z.union([ z.lazy(() => TaskTemplateUpdateWithoutPrecursorsInputSchema),z.lazy(() => TaskTemplateUncheckedUpdateWithoutPrecursorsInputSchema) ]),
  create: z.union([ z.lazy(() => TaskTemplateCreateWithoutPrecursorsInputSchema),z.lazy(() => TaskTemplateUncheckedCreateWithoutPrecursorsInputSchema) ]),
  where: z.lazy(() => TaskTemplateWhereInputSchema).optional()
}).strict();

export default TaskTemplateUpsertWithoutPrecursorsInputSchema;
