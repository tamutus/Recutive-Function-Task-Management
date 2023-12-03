import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateWhereUniqueInputSchema } from './TaskTemplateWhereUniqueInputSchema';
import { TaskTemplateCreateWithoutSkillsInputSchema } from './TaskTemplateCreateWithoutSkillsInputSchema';
import { TaskTemplateUncheckedCreateWithoutSkillsInputSchema } from './TaskTemplateUncheckedCreateWithoutSkillsInputSchema';

export const TaskTemplateCreateOrConnectWithoutSkillsInputSchema: z.ZodType<Prisma.TaskTemplateCreateOrConnectWithoutSkillsInput> = z.object({
  where: z.lazy(() => TaskTemplateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TaskTemplateCreateWithoutSkillsInputSchema),z.lazy(() => TaskTemplateUncheckedCreateWithoutSkillsInputSchema) ]),
}).strict();

export default TaskTemplateCreateOrConnectWithoutSkillsInputSchema;
