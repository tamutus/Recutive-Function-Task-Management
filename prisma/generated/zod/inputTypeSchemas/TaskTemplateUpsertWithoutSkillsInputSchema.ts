import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateUpdateWithoutSkillsInputSchema } from './TaskTemplateUpdateWithoutSkillsInputSchema';
import { TaskTemplateUncheckedUpdateWithoutSkillsInputSchema } from './TaskTemplateUncheckedUpdateWithoutSkillsInputSchema';
import { TaskTemplateCreateWithoutSkillsInputSchema } from './TaskTemplateCreateWithoutSkillsInputSchema';
import { TaskTemplateUncheckedCreateWithoutSkillsInputSchema } from './TaskTemplateUncheckedCreateWithoutSkillsInputSchema';
import { TaskTemplateWhereInputSchema } from './TaskTemplateWhereInputSchema';

export const TaskTemplateUpsertWithoutSkillsInputSchema: z.ZodType<Prisma.TaskTemplateUpsertWithoutSkillsInput> = z.object({
  update: z.union([ z.lazy(() => TaskTemplateUpdateWithoutSkillsInputSchema),z.lazy(() => TaskTemplateUncheckedUpdateWithoutSkillsInputSchema) ]),
  create: z.union([ z.lazy(() => TaskTemplateCreateWithoutSkillsInputSchema),z.lazy(() => TaskTemplateUncheckedCreateWithoutSkillsInputSchema) ]),
  where: z.lazy(() => TaskTemplateWhereInputSchema).optional()
}).strict();

export default TaskTemplateUpsertWithoutSkillsInputSchema;
