import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTasksScalarWhereInputSchema } from './SkillsToTasksScalarWhereInputSchema';
import { SkillsToTasksUpdateManyMutationInputSchema } from './SkillsToTasksUpdateManyMutationInputSchema';
import { SkillsToTasksUncheckedUpdateManyWithoutTaskInputSchema } from './SkillsToTasksUncheckedUpdateManyWithoutTaskInputSchema';

export const SkillsToTasksUpdateManyWithWhereWithoutTaskInputSchema: z.ZodType<Prisma.SkillsToTasksUpdateManyWithWhereWithoutTaskInput> = z.object({
  where: z.lazy(() => SkillsToTasksScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SkillsToTasksUpdateManyMutationInputSchema),z.lazy(() => SkillsToTasksUncheckedUpdateManyWithoutTaskInputSchema) ]),
}).strict();

export default SkillsToTasksUpdateManyWithWhereWithoutTaskInputSchema;
