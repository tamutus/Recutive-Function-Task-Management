import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateCreateWithoutSkillsInputSchema } from './TaskTemplateCreateWithoutSkillsInputSchema';
import { TaskTemplateUncheckedCreateWithoutSkillsInputSchema } from './TaskTemplateUncheckedCreateWithoutSkillsInputSchema';
import { TaskTemplateCreateOrConnectWithoutSkillsInputSchema } from './TaskTemplateCreateOrConnectWithoutSkillsInputSchema';
import { TaskTemplateUpsertWithoutSkillsInputSchema } from './TaskTemplateUpsertWithoutSkillsInputSchema';
import { TaskTemplateWhereUniqueInputSchema } from './TaskTemplateWhereUniqueInputSchema';
import { TaskTemplateUpdateToOneWithWhereWithoutSkillsInputSchema } from './TaskTemplateUpdateToOneWithWhereWithoutSkillsInputSchema';
import { TaskTemplateUpdateWithoutSkillsInputSchema } from './TaskTemplateUpdateWithoutSkillsInputSchema';
import { TaskTemplateUncheckedUpdateWithoutSkillsInputSchema } from './TaskTemplateUncheckedUpdateWithoutSkillsInputSchema';

export const TaskTemplateUpdateOneRequiredWithoutSkillsNestedInputSchema: z.ZodType<Prisma.TaskTemplateUpdateOneRequiredWithoutSkillsNestedInput> = z.object({
  create: z.union([ z.lazy(() => TaskTemplateCreateWithoutSkillsInputSchema),z.lazy(() => TaskTemplateUncheckedCreateWithoutSkillsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaskTemplateCreateOrConnectWithoutSkillsInputSchema).optional(),
  upsert: z.lazy(() => TaskTemplateUpsertWithoutSkillsInputSchema).optional(),
  connect: z.lazy(() => TaskTemplateWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TaskTemplateUpdateToOneWithWhereWithoutSkillsInputSchema),z.lazy(() => TaskTemplateUpdateWithoutSkillsInputSchema),z.lazy(() => TaskTemplateUncheckedUpdateWithoutSkillsInputSchema) ]).optional(),
}).strict();

export default TaskTemplateUpdateOneRequiredWithoutSkillsNestedInputSchema;
