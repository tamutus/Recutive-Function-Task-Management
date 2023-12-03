import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateWithoutSkillsInputSchema } from './TaskCreateWithoutSkillsInputSchema';
import { TaskUncheckedCreateWithoutSkillsInputSchema } from './TaskUncheckedCreateWithoutSkillsInputSchema';
import { TaskCreateOrConnectWithoutSkillsInputSchema } from './TaskCreateOrConnectWithoutSkillsInputSchema';
import { TaskUpsertWithoutSkillsInputSchema } from './TaskUpsertWithoutSkillsInputSchema';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';
import { TaskUpdateToOneWithWhereWithoutSkillsInputSchema } from './TaskUpdateToOneWithWhereWithoutSkillsInputSchema';
import { TaskUpdateWithoutSkillsInputSchema } from './TaskUpdateWithoutSkillsInputSchema';
import { TaskUncheckedUpdateWithoutSkillsInputSchema } from './TaskUncheckedUpdateWithoutSkillsInputSchema';

export const TaskUpdateOneRequiredWithoutSkillsNestedInputSchema: z.ZodType<Prisma.TaskUpdateOneRequiredWithoutSkillsNestedInput> = z.object({
  create: z.union([ z.lazy(() => TaskCreateWithoutSkillsInputSchema),z.lazy(() => TaskUncheckedCreateWithoutSkillsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaskCreateOrConnectWithoutSkillsInputSchema).optional(),
  upsert: z.lazy(() => TaskUpsertWithoutSkillsInputSchema).optional(),
  connect: z.lazy(() => TaskWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TaskUpdateToOneWithWhereWithoutSkillsInputSchema),z.lazy(() => TaskUpdateWithoutSkillsInputSchema),z.lazy(() => TaskUncheckedUpdateWithoutSkillsInputSchema) ]).optional(),
}).strict();

export default TaskUpdateOneRequiredWithoutSkillsNestedInputSchema;
