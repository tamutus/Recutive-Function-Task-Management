import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateCreateWithoutSuccessorsInputSchema } from './TaskTemplateCreateWithoutSuccessorsInputSchema';
import { TaskTemplateUncheckedCreateWithoutSuccessorsInputSchema } from './TaskTemplateUncheckedCreateWithoutSuccessorsInputSchema';
import { TaskTemplateCreateOrConnectWithoutSuccessorsInputSchema } from './TaskTemplateCreateOrConnectWithoutSuccessorsInputSchema';
import { TaskTemplateUpsertWithoutSuccessorsInputSchema } from './TaskTemplateUpsertWithoutSuccessorsInputSchema';
import { TaskTemplateWhereUniqueInputSchema } from './TaskTemplateWhereUniqueInputSchema';
import { TaskTemplateUpdateToOneWithWhereWithoutSuccessorsInputSchema } from './TaskTemplateUpdateToOneWithWhereWithoutSuccessorsInputSchema';
import { TaskTemplateUpdateWithoutSuccessorsInputSchema } from './TaskTemplateUpdateWithoutSuccessorsInputSchema';
import { TaskTemplateUncheckedUpdateWithoutSuccessorsInputSchema } from './TaskTemplateUncheckedUpdateWithoutSuccessorsInputSchema';

export const TaskTemplateUpdateOneRequiredWithoutSuccessorsNestedInputSchema: z.ZodType<Prisma.TaskTemplateUpdateOneRequiredWithoutSuccessorsNestedInput> = z.object({
  create: z.union([ z.lazy(() => TaskTemplateCreateWithoutSuccessorsInputSchema),z.lazy(() => TaskTemplateUncheckedCreateWithoutSuccessorsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaskTemplateCreateOrConnectWithoutSuccessorsInputSchema).optional(),
  upsert: z.lazy(() => TaskTemplateUpsertWithoutSuccessorsInputSchema).optional(),
  connect: z.lazy(() => TaskTemplateWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TaskTemplateUpdateToOneWithWhereWithoutSuccessorsInputSchema),z.lazy(() => TaskTemplateUpdateWithoutSuccessorsInputSchema),z.lazy(() => TaskTemplateUncheckedUpdateWithoutSuccessorsInputSchema) ]).optional(),
}).strict();

export default TaskTemplateUpdateOneRequiredWithoutSuccessorsNestedInputSchema;
