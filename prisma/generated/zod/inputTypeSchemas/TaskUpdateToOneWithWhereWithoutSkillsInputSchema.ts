import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWhereInputSchema } from './TaskWhereInputSchema';
import { TaskUpdateWithoutSkillsInputSchema } from './TaskUpdateWithoutSkillsInputSchema';
import { TaskUncheckedUpdateWithoutSkillsInputSchema } from './TaskUncheckedUpdateWithoutSkillsInputSchema';

export const TaskUpdateToOneWithWhereWithoutSkillsInputSchema: z.ZodType<Prisma.TaskUpdateToOneWithWhereWithoutSkillsInput> = z.object({
  where: z.lazy(() => TaskWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TaskUpdateWithoutSkillsInputSchema),z.lazy(() => TaskUncheckedUpdateWithoutSkillsInputSchema) ]),
}).strict();

export default TaskUpdateToOneWithWhereWithoutSkillsInputSchema;
