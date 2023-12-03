import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateUpdateWithoutCollaboratorsInputSchema } from './TaskTemplateUpdateWithoutCollaboratorsInputSchema';
import { TaskTemplateUncheckedUpdateWithoutCollaboratorsInputSchema } from './TaskTemplateUncheckedUpdateWithoutCollaboratorsInputSchema';
import { TaskTemplateCreateWithoutCollaboratorsInputSchema } from './TaskTemplateCreateWithoutCollaboratorsInputSchema';
import { TaskTemplateUncheckedCreateWithoutCollaboratorsInputSchema } from './TaskTemplateUncheckedCreateWithoutCollaboratorsInputSchema';
import { TaskTemplateWhereInputSchema } from './TaskTemplateWhereInputSchema';

export const TaskTemplateUpsertWithoutCollaboratorsInputSchema: z.ZodType<Prisma.TaskTemplateUpsertWithoutCollaboratorsInput> = z.object({
  update: z.union([ z.lazy(() => TaskTemplateUpdateWithoutCollaboratorsInputSchema),z.lazy(() => TaskTemplateUncheckedUpdateWithoutCollaboratorsInputSchema) ]),
  create: z.union([ z.lazy(() => TaskTemplateCreateWithoutCollaboratorsInputSchema),z.lazy(() => TaskTemplateUncheckedCreateWithoutCollaboratorsInputSchema) ]),
  where: z.lazy(() => TaskTemplateWhereInputSchema).optional()
}).strict();

export default TaskTemplateUpsertWithoutCollaboratorsInputSchema;
