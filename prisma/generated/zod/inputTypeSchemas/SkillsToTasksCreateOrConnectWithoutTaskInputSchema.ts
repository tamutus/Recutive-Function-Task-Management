import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTasksWhereUniqueInputSchema } from './SkillsToTasksWhereUniqueInputSchema';
import { SkillsToTasksCreateWithoutTaskInputSchema } from './SkillsToTasksCreateWithoutTaskInputSchema';
import { SkillsToTasksUncheckedCreateWithoutTaskInputSchema } from './SkillsToTasksUncheckedCreateWithoutTaskInputSchema';

export const SkillsToTasksCreateOrConnectWithoutTaskInputSchema: z.ZodType<Prisma.SkillsToTasksCreateOrConnectWithoutTaskInput> = z.object({
  where: z.lazy(() => SkillsToTasksWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SkillsToTasksCreateWithoutTaskInputSchema),z.lazy(() => SkillsToTasksUncheckedCreateWithoutTaskInputSchema) ]),
}).strict();

export default SkillsToTasksCreateOrConnectWithoutTaskInputSchema;
