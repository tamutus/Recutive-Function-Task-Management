import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToSkillsWhereUniqueInputSchema } from './PrioritiesToSkillsWhereUniqueInputSchema';
import { PrioritiesToSkillsUpdateWithoutPriorityInputSchema } from './PrioritiesToSkillsUpdateWithoutPriorityInputSchema';
import { PrioritiesToSkillsUncheckedUpdateWithoutPriorityInputSchema } from './PrioritiesToSkillsUncheckedUpdateWithoutPriorityInputSchema';

export const PrioritiesToSkillsUpdateWithWhereUniqueWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToSkillsUpdateWithWhereUniqueWithoutPriorityInput> = z.object({
  where: z.lazy(() => PrioritiesToSkillsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PrioritiesToSkillsUpdateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToSkillsUncheckedUpdateWithoutPriorityInputSchema) ]),
}).strict();

export default PrioritiesToSkillsUpdateWithWhereUniqueWithoutPriorityInputSchema;
