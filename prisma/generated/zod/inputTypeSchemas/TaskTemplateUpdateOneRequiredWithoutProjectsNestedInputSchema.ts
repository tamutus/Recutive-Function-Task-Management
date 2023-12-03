import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateCreateWithoutProjectsInputSchema } from './TaskTemplateCreateWithoutProjectsInputSchema';
import { TaskTemplateUncheckedCreateWithoutProjectsInputSchema } from './TaskTemplateUncheckedCreateWithoutProjectsInputSchema';
import { TaskTemplateCreateOrConnectWithoutProjectsInputSchema } from './TaskTemplateCreateOrConnectWithoutProjectsInputSchema';
import { TaskTemplateUpsertWithoutProjectsInputSchema } from './TaskTemplateUpsertWithoutProjectsInputSchema';
import { TaskTemplateWhereUniqueInputSchema } from './TaskTemplateWhereUniqueInputSchema';
import { TaskTemplateUpdateToOneWithWhereWithoutProjectsInputSchema } from './TaskTemplateUpdateToOneWithWhereWithoutProjectsInputSchema';
import { TaskTemplateUpdateWithoutProjectsInputSchema } from './TaskTemplateUpdateWithoutProjectsInputSchema';
import { TaskTemplateUncheckedUpdateWithoutProjectsInputSchema } from './TaskTemplateUncheckedUpdateWithoutProjectsInputSchema';

export const TaskTemplateUpdateOneRequiredWithoutProjectsNestedInputSchema: z.ZodType<Prisma.TaskTemplateUpdateOneRequiredWithoutProjectsNestedInput> = z.object({
  create: z.union([ z.lazy(() => TaskTemplateCreateWithoutProjectsInputSchema),z.lazy(() => TaskTemplateUncheckedCreateWithoutProjectsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaskTemplateCreateOrConnectWithoutProjectsInputSchema).optional(),
  upsert: z.lazy(() => TaskTemplateUpsertWithoutProjectsInputSchema).optional(),
  connect: z.lazy(() => TaskTemplateWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TaskTemplateUpdateToOneWithWhereWithoutProjectsInputSchema),z.lazy(() => TaskTemplateUpdateWithoutProjectsInputSchema),z.lazy(() => TaskTemplateUncheckedUpdateWithoutProjectsInputSchema) ]).optional(),
}).strict();

export default TaskTemplateUpdateOneRequiredWithoutProjectsNestedInputSchema;
