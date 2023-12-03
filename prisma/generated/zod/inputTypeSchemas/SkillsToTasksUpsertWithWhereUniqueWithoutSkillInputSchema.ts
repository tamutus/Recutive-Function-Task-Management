import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTasksWhereUniqueInputSchema } from './SkillsToTasksWhereUniqueInputSchema';
import { SkillsToTasksUpdateWithoutSkillInputSchema } from './SkillsToTasksUpdateWithoutSkillInputSchema';
import { SkillsToTasksUncheckedUpdateWithoutSkillInputSchema } from './SkillsToTasksUncheckedUpdateWithoutSkillInputSchema';
import { SkillsToTasksCreateWithoutSkillInputSchema } from './SkillsToTasksCreateWithoutSkillInputSchema';
import { SkillsToTasksUncheckedCreateWithoutSkillInputSchema } from './SkillsToTasksUncheckedCreateWithoutSkillInputSchema';

export const SkillsToTasksUpsertWithWhereUniqueWithoutSkillInputSchema: z.ZodType<Prisma.SkillsToTasksUpsertWithWhereUniqueWithoutSkillInput> = z.object({
  where: z.lazy(() => SkillsToTasksWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SkillsToTasksUpdateWithoutSkillInputSchema),z.lazy(() => SkillsToTasksUncheckedUpdateWithoutSkillInputSchema) ]),
  create: z.union([ z.lazy(() => SkillsToTasksCreateWithoutSkillInputSchema),z.lazy(() => SkillsToTasksUncheckedCreateWithoutSkillInputSchema) ]),
}).strict();

export default SkillsToTasksUpsertWithWhereUniqueWithoutSkillInputSchema;
