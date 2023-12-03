import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTaskTemplatesScalarWhereInputSchema } from './SkillsToTaskTemplatesScalarWhereInputSchema';
import { SkillsToTaskTemplatesUpdateManyMutationInputSchema } from './SkillsToTaskTemplatesUpdateManyMutationInputSchema';
import { SkillsToTaskTemplatesUncheckedUpdateManyWithoutTaskInputSchema } from './SkillsToTaskTemplatesUncheckedUpdateManyWithoutTaskInputSchema';

export const SkillsToTaskTemplatesUpdateManyWithWhereWithoutTaskInputSchema: z.ZodType<Prisma.SkillsToTaskTemplatesUpdateManyWithWhereWithoutTaskInput> = z.object({
  where: z.lazy(() => SkillsToTaskTemplatesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SkillsToTaskTemplatesUpdateManyMutationInputSchema),z.lazy(() => SkillsToTaskTemplatesUncheckedUpdateManyWithoutTaskInputSchema) ]),
}).strict();

export default SkillsToTaskTemplatesUpdateManyWithWhereWithoutTaskInputSchema;
