import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateWhereInputSchema } from './TaskTemplateWhereInputSchema';
import { TaskTemplateUpdateWithoutCollaboratorsInputSchema } from './TaskTemplateUpdateWithoutCollaboratorsInputSchema';
import { TaskTemplateUncheckedUpdateWithoutCollaboratorsInputSchema } from './TaskTemplateUncheckedUpdateWithoutCollaboratorsInputSchema';

export const TaskTemplateUpdateToOneWithWhereWithoutCollaboratorsInputSchema: z.ZodType<Prisma.TaskTemplateUpdateToOneWithWhereWithoutCollaboratorsInput> = z.object({
  where: z.lazy(() => TaskTemplateWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TaskTemplateUpdateWithoutCollaboratorsInputSchema),z.lazy(() => TaskTemplateUncheckedUpdateWithoutCollaboratorsInputSchema) ]),
}).strict();

export default TaskTemplateUpdateToOneWithWhereWithoutCollaboratorsInputSchema;
