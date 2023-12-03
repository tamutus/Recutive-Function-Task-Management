import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTasksWhereUniqueInputSchema } from './SkillsToTasksWhereUniqueInputSchema';
import { SkillsToTasksUpdateWithoutTaskInputSchema } from './SkillsToTasksUpdateWithoutTaskInputSchema';
import { SkillsToTasksUncheckedUpdateWithoutTaskInputSchema } from './SkillsToTasksUncheckedUpdateWithoutTaskInputSchema';
import { SkillsToTasksCreateWithoutTaskInputSchema } from './SkillsToTasksCreateWithoutTaskInputSchema';
import { SkillsToTasksUncheckedCreateWithoutTaskInputSchema } from './SkillsToTasksUncheckedCreateWithoutTaskInputSchema';

export const SkillsToTasksUpsertWithWhereUniqueWithoutTaskInputSchema: z.ZodType<Prisma.SkillsToTasksUpsertWithWhereUniqueWithoutTaskInput> = z.object({
  where: z.lazy(() => SkillsToTasksWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SkillsToTasksUpdateWithoutTaskInputSchema),z.lazy(() => SkillsToTasksUncheckedUpdateWithoutTaskInputSchema) ]),
  create: z.union([ z.lazy(() => SkillsToTasksCreateWithoutTaskInputSchema),z.lazy(() => SkillsToTasksUncheckedCreateWithoutTaskInputSchema) ]),
}).strict();

export default SkillsToTasksUpsertWithWhereUniqueWithoutTaskInputSchema;
