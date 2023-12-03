import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTasksScalarWhereInputSchema } from './SkillsToTasksScalarWhereInputSchema';
import { SkillsToTasksUpdateManyMutationInputSchema } from './SkillsToTasksUpdateManyMutationInputSchema';
import { SkillsToTasksUncheckedUpdateManyWithoutSkillInputSchema } from './SkillsToTasksUncheckedUpdateManyWithoutSkillInputSchema';

export const SkillsToTasksUpdateManyWithWhereWithoutSkillInputSchema: z.ZodType<Prisma.SkillsToTasksUpdateManyWithWhereWithoutSkillInput> = z.object({
  where: z.lazy(() => SkillsToTasksScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SkillsToTasksUpdateManyMutationInputSchema),z.lazy(() => SkillsToTasksUncheckedUpdateManyWithoutSkillInputSchema) ]),
}).strict();

export default SkillsToTasksUpdateManyWithWhereWithoutSkillInputSchema;
