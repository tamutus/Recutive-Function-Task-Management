import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateCreateWithoutPrecursorsInputSchema } from './TaskTemplateCreateWithoutPrecursorsInputSchema';
import { TaskTemplateUncheckedCreateWithoutPrecursorsInputSchema } from './TaskTemplateUncheckedCreateWithoutPrecursorsInputSchema';
import { TaskTemplateCreateOrConnectWithoutPrecursorsInputSchema } from './TaskTemplateCreateOrConnectWithoutPrecursorsInputSchema';
import { TaskTemplateUpsertWithoutPrecursorsInputSchema } from './TaskTemplateUpsertWithoutPrecursorsInputSchema';
import { TaskTemplateWhereUniqueInputSchema } from './TaskTemplateWhereUniqueInputSchema';
import { TaskTemplateUpdateToOneWithWhereWithoutPrecursorsInputSchema } from './TaskTemplateUpdateToOneWithWhereWithoutPrecursorsInputSchema';
import { TaskTemplateUpdateWithoutPrecursorsInputSchema } from './TaskTemplateUpdateWithoutPrecursorsInputSchema';
import { TaskTemplateUncheckedUpdateWithoutPrecursorsInputSchema } from './TaskTemplateUncheckedUpdateWithoutPrecursorsInputSchema';

export const TaskTemplateUpdateOneRequiredWithoutPrecursorsNestedInputSchema: z.ZodType<Prisma.TaskTemplateUpdateOneRequiredWithoutPrecursorsNestedInput> = z.object({
  create: z.union([ z.lazy(() => TaskTemplateCreateWithoutPrecursorsInputSchema),z.lazy(() => TaskTemplateUncheckedCreateWithoutPrecursorsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaskTemplateCreateOrConnectWithoutPrecursorsInputSchema).optional(),
  upsert: z.lazy(() => TaskTemplateUpsertWithoutPrecursorsInputSchema).optional(),
  connect: z.lazy(() => TaskTemplateWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TaskTemplateUpdateToOneWithWhereWithoutPrecursorsInputSchema),z.lazy(() => TaskTemplateUpdateWithoutPrecursorsInputSchema),z.lazy(() => TaskTemplateUncheckedUpdateWithoutPrecursorsInputSchema) ]).optional(),
}).strict();

export default TaskTemplateUpdateOneRequiredWithoutPrecursorsNestedInputSchema;
