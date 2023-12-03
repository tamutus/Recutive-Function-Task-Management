import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTaskTemplatesScalarWhereInputSchema } from './SkillsToTaskTemplatesScalarWhereInputSchema';
import { SkillsToTaskTemplatesUpdateManyMutationInputSchema } from './SkillsToTaskTemplatesUpdateManyMutationInputSchema';
import { SkillsToTaskTemplatesUncheckedUpdateManyWithoutSkillInputSchema } from './SkillsToTaskTemplatesUncheckedUpdateManyWithoutSkillInputSchema';

export const SkillsToTaskTemplatesUpdateManyWithWhereWithoutSkillInputSchema: z.ZodType<Prisma.SkillsToTaskTemplatesUpdateManyWithWhereWithoutSkillInput> = z.object({
  where: z.lazy(() => SkillsToTaskTemplatesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SkillsToTaskTemplatesUpdateManyMutationInputSchema),z.lazy(() => SkillsToTaskTemplatesUncheckedUpdateManyWithoutSkillInputSchema) ]),
}).strict();

export default SkillsToTaskTemplatesUpdateManyWithWhereWithoutSkillInputSchema;
