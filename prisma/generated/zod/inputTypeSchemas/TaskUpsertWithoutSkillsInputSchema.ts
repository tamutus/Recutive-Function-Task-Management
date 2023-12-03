import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskUpdateWithoutSkillsInputSchema } from './TaskUpdateWithoutSkillsInputSchema';
import { TaskUncheckedUpdateWithoutSkillsInputSchema } from './TaskUncheckedUpdateWithoutSkillsInputSchema';
import { TaskCreateWithoutSkillsInputSchema } from './TaskCreateWithoutSkillsInputSchema';
import { TaskUncheckedCreateWithoutSkillsInputSchema } from './TaskUncheckedCreateWithoutSkillsInputSchema';
import { TaskWhereInputSchema } from './TaskWhereInputSchema';

export const TaskUpsertWithoutSkillsInputSchema: z.ZodType<Prisma.TaskUpsertWithoutSkillsInput> = z.object({
  update: z.union([ z.lazy(() => TaskUpdateWithoutSkillsInputSchema),z.lazy(() => TaskUncheckedUpdateWithoutSkillsInputSchema) ]),
  create: z.union([ z.lazy(() => TaskCreateWithoutSkillsInputSchema),z.lazy(() => TaskUncheckedCreateWithoutSkillsInputSchema) ]),
  where: z.lazy(() => TaskWhereInputSchema).optional()
}).strict();

export default TaskUpsertWithoutSkillsInputSchema;
