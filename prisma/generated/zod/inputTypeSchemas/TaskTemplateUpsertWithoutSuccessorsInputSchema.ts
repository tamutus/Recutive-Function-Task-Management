import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateUpdateWithoutSuccessorsInputSchema } from './TaskTemplateUpdateWithoutSuccessorsInputSchema';
import { TaskTemplateUncheckedUpdateWithoutSuccessorsInputSchema } from './TaskTemplateUncheckedUpdateWithoutSuccessorsInputSchema';
import { TaskTemplateCreateWithoutSuccessorsInputSchema } from './TaskTemplateCreateWithoutSuccessorsInputSchema';
import { TaskTemplateUncheckedCreateWithoutSuccessorsInputSchema } from './TaskTemplateUncheckedCreateWithoutSuccessorsInputSchema';
import { TaskTemplateWhereInputSchema } from './TaskTemplateWhereInputSchema';

export const TaskTemplateUpsertWithoutSuccessorsInputSchema: z.ZodType<Prisma.TaskTemplateUpsertWithoutSuccessorsInput> = z.object({
  update: z.union([ z.lazy(() => TaskTemplateUpdateWithoutSuccessorsInputSchema),z.lazy(() => TaskTemplateUncheckedUpdateWithoutSuccessorsInputSchema) ]),
  create: z.union([ z.lazy(() => TaskTemplateCreateWithoutSuccessorsInputSchema),z.lazy(() => TaskTemplateUncheckedCreateWithoutSuccessorsInputSchema) ]),
  where: z.lazy(() => TaskTemplateWhereInputSchema).optional()
}).strict();

export default TaskTemplateUpsertWithoutSuccessorsInputSchema;
