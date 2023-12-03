import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateWithoutSkillsInputSchema } from './TaskCreateWithoutSkillsInputSchema';
import { TaskUncheckedCreateWithoutSkillsInputSchema } from './TaskUncheckedCreateWithoutSkillsInputSchema';
import { TaskCreateOrConnectWithoutSkillsInputSchema } from './TaskCreateOrConnectWithoutSkillsInputSchema';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';

export const TaskCreateNestedOneWithoutSkillsInputSchema: z.ZodType<Prisma.TaskCreateNestedOneWithoutSkillsInput> = z.object({
  create: z.union([ z.lazy(() => TaskCreateWithoutSkillsInputSchema),z.lazy(() => TaskUncheckedCreateWithoutSkillsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaskCreateOrConnectWithoutSkillsInputSchema).optional(),
  connect: z.lazy(() => TaskWhereUniqueInputSchema).optional()
}).strict();

export default TaskCreateNestedOneWithoutSkillsInputSchema;
