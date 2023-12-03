import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateCreateWithoutSkillsInputSchema } from './TaskTemplateCreateWithoutSkillsInputSchema';
import { TaskTemplateUncheckedCreateWithoutSkillsInputSchema } from './TaskTemplateUncheckedCreateWithoutSkillsInputSchema';
import { TaskTemplateCreateOrConnectWithoutSkillsInputSchema } from './TaskTemplateCreateOrConnectWithoutSkillsInputSchema';
import { TaskTemplateWhereUniqueInputSchema } from './TaskTemplateWhereUniqueInputSchema';

export const TaskTemplateCreateNestedOneWithoutSkillsInputSchema: z.ZodType<Prisma.TaskTemplateCreateNestedOneWithoutSkillsInput> = z.object({
  create: z.union([ z.lazy(() => TaskTemplateCreateWithoutSkillsInputSchema),z.lazy(() => TaskTemplateUncheckedCreateWithoutSkillsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaskTemplateCreateOrConnectWithoutSkillsInputSchema).optional(),
  connect: z.lazy(() => TaskTemplateWhereUniqueInputSchema).optional()
}).strict();

export default TaskTemplateCreateNestedOneWithoutSkillsInputSchema;
