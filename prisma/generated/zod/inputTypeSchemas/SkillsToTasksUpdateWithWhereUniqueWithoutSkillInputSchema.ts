import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTasksWhereUniqueInputSchema } from './SkillsToTasksWhereUniqueInputSchema';
import { SkillsToTasksUpdateWithoutSkillInputSchema } from './SkillsToTasksUpdateWithoutSkillInputSchema';
import { SkillsToTasksUncheckedUpdateWithoutSkillInputSchema } from './SkillsToTasksUncheckedUpdateWithoutSkillInputSchema';

export const SkillsToTasksUpdateWithWhereUniqueWithoutSkillInputSchema: z.ZodType<Prisma.SkillsToTasksUpdateWithWhereUniqueWithoutSkillInput> = z.object({
  where: z.lazy(() => SkillsToTasksWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SkillsToTasksUpdateWithoutSkillInputSchema),z.lazy(() => SkillsToTasksUncheckedUpdateWithoutSkillInputSchema) ]),
}).strict();

export default SkillsToTasksUpdateWithWhereUniqueWithoutSkillInputSchema;
