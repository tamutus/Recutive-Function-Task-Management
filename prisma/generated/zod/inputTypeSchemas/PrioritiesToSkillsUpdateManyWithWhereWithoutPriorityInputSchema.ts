import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToSkillsScalarWhereInputSchema } from './PrioritiesToSkillsScalarWhereInputSchema';
import { PrioritiesToSkillsUpdateManyMutationInputSchema } from './PrioritiesToSkillsUpdateManyMutationInputSchema';
import { PrioritiesToSkillsUncheckedUpdateManyWithoutPriorityInputSchema } from './PrioritiesToSkillsUncheckedUpdateManyWithoutPriorityInputSchema';

export const PrioritiesToSkillsUpdateManyWithWhereWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToSkillsUpdateManyWithWhereWithoutPriorityInput> = z.object({
  where: z.lazy(() => PrioritiesToSkillsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PrioritiesToSkillsUpdateManyMutationInputSchema),z.lazy(() => PrioritiesToSkillsUncheckedUpdateManyWithoutPriorityInputSchema) ]),
}).strict();

export default PrioritiesToSkillsUpdateManyWithWhereWithoutPriorityInputSchema;
