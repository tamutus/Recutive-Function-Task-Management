import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToSkillPathsScalarWhereInputSchema } from './PrioritiesToSkillPathsScalarWhereInputSchema';
import { PrioritiesToSkillPathsUpdateManyMutationInputSchema } from './PrioritiesToSkillPathsUpdateManyMutationInputSchema';
import { PrioritiesToSkillPathsUncheckedUpdateManyWithoutPriorityInputSchema } from './PrioritiesToSkillPathsUncheckedUpdateManyWithoutPriorityInputSchema';

export const PrioritiesToSkillPathsUpdateManyWithWhereWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToSkillPathsUpdateManyWithWhereWithoutPriorityInput> = z.object({
  where: z.lazy(() => PrioritiesToSkillPathsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PrioritiesToSkillPathsUpdateManyMutationInputSchema),z.lazy(() => PrioritiesToSkillPathsUncheckedUpdateManyWithoutPriorityInputSchema) ]),
}).strict();

export default PrioritiesToSkillPathsUpdateManyWithWhereWithoutPriorityInputSchema;
