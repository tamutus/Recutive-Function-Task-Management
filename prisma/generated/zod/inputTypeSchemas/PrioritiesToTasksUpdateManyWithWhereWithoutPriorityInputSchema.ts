import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToTasksScalarWhereInputSchema } from './PrioritiesToTasksScalarWhereInputSchema';
import { PrioritiesToTasksUpdateManyMutationInputSchema } from './PrioritiesToTasksUpdateManyMutationInputSchema';
import { PrioritiesToTasksUncheckedUpdateManyWithoutPriorityInputSchema } from './PrioritiesToTasksUncheckedUpdateManyWithoutPriorityInputSchema';

export const PrioritiesToTasksUpdateManyWithWhereWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToTasksUpdateManyWithWhereWithoutPriorityInput> = z.object({
  where: z.lazy(() => PrioritiesToTasksScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PrioritiesToTasksUpdateManyMutationInputSchema),z.lazy(() => PrioritiesToTasksUncheckedUpdateManyWithoutPriorityInputSchema) ]),
}).strict();

export default PrioritiesToTasksUpdateManyWithWhereWithoutPriorityInputSchema;
