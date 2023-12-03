import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToTasksWhereUniqueInputSchema } from './PrioritiesToTasksWhereUniqueInputSchema';
import { PrioritiesToTasksUpdateWithoutPriorityInputSchema } from './PrioritiesToTasksUpdateWithoutPriorityInputSchema';
import { PrioritiesToTasksUncheckedUpdateWithoutPriorityInputSchema } from './PrioritiesToTasksUncheckedUpdateWithoutPriorityInputSchema';

export const PrioritiesToTasksUpdateWithWhereUniqueWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToTasksUpdateWithWhereUniqueWithoutPriorityInput> = z.object({
  where: z.lazy(() => PrioritiesToTasksWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PrioritiesToTasksUpdateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToTasksUncheckedUpdateWithoutPriorityInputSchema) ]),
}).strict();

export default PrioritiesToTasksUpdateWithWhereUniqueWithoutPriorityInputSchema;
