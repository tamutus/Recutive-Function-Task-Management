import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToProjectsWhereUniqueInputSchema } from './PrioritiesToProjectsWhereUniqueInputSchema';
import { PrioritiesToProjectsUpdateWithoutPriorityInputSchema } from './PrioritiesToProjectsUpdateWithoutPriorityInputSchema';
import { PrioritiesToProjectsUncheckedUpdateWithoutPriorityInputSchema } from './PrioritiesToProjectsUncheckedUpdateWithoutPriorityInputSchema';

export const PrioritiesToProjectsUpdateWithWhereUniqueWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToProjectsUpdateWithWhereUniqueWithoutPriorityInput> = z.object({
  where: z.lazy(() => PrioritiesToProjectsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PrioritiesToProjectsUpdateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToProjectsUncheckedUpdateWithoutPriorityInputSchema) ]),
}).strict();

export default PrioritiesToProjectsUpdateWithWhereUniqueWithoutPriorityInputSchema;
