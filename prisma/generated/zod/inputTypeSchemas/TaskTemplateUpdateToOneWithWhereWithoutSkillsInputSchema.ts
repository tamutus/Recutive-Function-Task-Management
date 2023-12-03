import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateWhereInputSchema } from './TaskTemplateWhereInputSchema';
import { TaskTemplateUpdateWithoutSkillsInputSchema } from './TaskTemplateUpdateWithoutSkillsInputSchema';
import { TaskTemplateUncheckedUpdateWithoutSkillsInputSchema } from './TaskTemplateUncheckedUpdateWithoutSkillsInputSchema';

export const TaskTemplateUpdateToOneWithWhereWithoutSkillsInputSchema: z.ZodType<Prisma.TaskTemplateUpdateToOneWithWhereWithoutSkillsInput> = z.object({
  where: z.lazy(() => TaskTemplateWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TaskTemplateUpdateWithoutSkillsInputSchema),z.lazy(() => TaskTemplateUncheckedUpdateWithoutSkillsInputSchema) ]),
}).strict();

export default TaskTemplateUpdateToOneWithWhereWithoutSkillsInputSchema;
