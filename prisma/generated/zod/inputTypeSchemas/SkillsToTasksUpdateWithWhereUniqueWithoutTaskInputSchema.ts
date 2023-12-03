import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTasksWhereUniqueInputSchema } from './SkillsToTasksWhereUniqueInputSchema';
import { SkillsToTasksUpdateWithoutTaskInputSchema } from './SkillsToTasksUpdateWithoutTaskInputSchema';
import { SkillsToTasksUncheckedUpdateWithoutTaskInputSchema } from './SkillsToTasksUncheckedUpdateWithoutTaskInputSchema';

export const SkillsToTasksUpdateWithWhereUniqueWithoutTaskInputSchema: z.ZodType<Prisma.SkillsToTasksUpdateWithWhereUniqueWithoutTaskInput> = z.object({
  where: z.lazy(() => SkillsToTasksWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SkillsToTasksUpdateWithoutTaskInputSchema),z.lazy(() => SkillsToTasksUncheckedUpdateWithoutTaskInputSchema) ]),
}).strict();

export default SkillsToTasksUpdateWithWhereUniqueWithoutTaskInputSchema;
