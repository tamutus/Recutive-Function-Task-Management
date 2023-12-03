import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';
import { TaskCreateWithoutSkillsInputSchema } from './TaskCreateWithoutSkillsInputSchema';
import { TaskUncheckedCreateWithoutSkillsInputSchema } from './TaskUncheckedCreateWithoutSkillsInputSchema';

export const TaskCreateOrConnectWithoutSkillsInputSchema: z.ZodType<Prisma.TaskCreateOrConnectWithoutSkillsInput> = z.object({
  where: z.lazy(() => TaskWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TaskCreateWithoutSkillsInputSchema),z.lazy(() => TaskUncheckedCreateWithoutSkillsInputSchema) ]),
}).strict();

export default TaskCreateOrConnectWithoutSkillsInputSchema;
