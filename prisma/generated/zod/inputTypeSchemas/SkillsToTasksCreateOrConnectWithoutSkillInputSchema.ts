import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTasksWhereUniqueInputSchema } from './SkillsToTasksWhereUniqueInputSchema';
import { SkillsToTasksCreateWithoutSkillInputSchema } from './SkillsToTasksCreateWithoutSkillInputSchema';
import { SkillsToTasksUncheckedCreateWithoutSkillInputSchema } from './SkillsToTasksUncheckedCreateWithoutSkillInputSchema';

export const SkillsToTasksCreateOrConnectWithoutSkillInputSchema: z.ZodType<Prisma.SkillsToTasksCreateOrConnectWithoutSkillInput> = z.object({
  where: z.lazy(() => SkillsToTasksWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SkillsToTasksCreateWithoutSkillInputSchema),z.lazy(() => SkillsToTasksUncheckedCreateWithoutSkillInputSchema) ]),
}).strict();

export default SkillsToTasksCreateOrConnectWithoutSkillInputSchema;
