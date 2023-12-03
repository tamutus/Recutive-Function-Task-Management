import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateCreateWithoutCollaboratorsInputSchema } from './TaskTemplateCreateWithoutCollaboratorsInputSchema';
import { TaskTemplateUncheckedCreateWithoutCollaboratorsInputSchema } from './TaskTemplateUncheckedCreateWithoutCollaboratorsInputSchema';
import { TaskTemplateCreateOrConnectWithoutCollaboratorsInputSchema } from './TaskTemplateCreateOrConnectWithoutCollaboratorsInputSchema';
import { TaskTemplateUpsertWithoutCollaboratorsInputSchema } from './TaskTemplateUpsertWithoutCollaboratorsInputSchema';
import { TaskTemplateWhereUniqueInputSchema } from './TaskTemplateWhereUniqueInputSchema';
import { TaskTemplateUpdateToOneWithWhereWithoutCollaboratorsInputSchema } from './TaskTemplateUpdateToOneWithWhereWithoutCollaboratorsInputSchema';
import { TaskTemplateUpdateWithoutCollaboratorsInputSchema } from './TaskTemplateUpdateWithoutCollaboratorsInputSchema';
import { TaskTemplateUncheckedUpdateWithoutCollaboratorsInputSchema } from './TaskTemplateUncheckedUpdateWithoutCollaboratorsInputSchema';

export const TaskTemplateUpdateOneRequiredWithoutCollaboratorsNestedInputSchema: z.ZodType<Prisma.TaskTemplateUpdateOneRequiredWithoutCollaboratorsNestedInput> = z.object({
  create: z.union([ z.lazy(() => TaskTemplateCreateWithoutCollaboratorsInputSchema),z.lazy(() => TaskTemplateUncheckedCreateWithoutCollaboratorsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaskTemplateCreateOrConnectWithoutCollaboratorsInputSchema).optional(),
  upsert: z.lazy(() => TaskTemplateUpsertWithoutCollaboratorsInputSchema).optional(),
  connect: z.lazy(() => TaskTemplateWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TaskTemplateUpdateToOneWithWhereWithoutCollaboratorsInputSchema),z.lazy(() => TaskTemplateUpdateWithoutCollaboratorsInputSchema),z.lazy(() => TaskTemplateUncheckedUpdateWithoutCollaboratorsInputSchema) ]).optional(),
}).strict();

export default TaskTemplateUpdateOneRequiredWithoutCollaboratorsNestedInputSchema;
