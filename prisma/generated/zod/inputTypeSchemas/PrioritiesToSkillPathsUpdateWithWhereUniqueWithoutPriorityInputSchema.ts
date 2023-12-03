import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToSkillPathsWhereUniqueInputSchema } from './PrioritiesToSkillPathsWhereUniqueInputSchema';
import { PrioritiesToSkillPathsUpdateWithoutPriorityInputSchema } from './PrioritiesToSkillPathsUpdateWithoutPriorityInputSchema';
import { PrioritiesToSkillPathsUncheckedUpdateWithoutPriorityInputSchema } from './PrioritiesToSkillPathsUncheckedUpdateWithoutPriorityInputSchema';

export const PrioritiesToSkillPathsUpdateWithWhereUniqueWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToSkillPathsUpdateWithWhereUniqueWithoutPriorityInput> = z.object({
  where: z.lazy(() => PrioritiesToSkillPathsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PrioritiesToSkillPathsUpdateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToSkillPathsUncheckedUpdateWithoutPriorityInputSchema) ]),
}).strict();

export default PrioritiesToSkillPathsUpdateWithWhereUniqueWithoutPriorityInputSchema;
