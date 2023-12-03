import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToProjectsScalarWhereInputSchema } from './PrioritiesToProjectsScalarWhereInputSchema';
import { PrioritiesToProjectsUpdateManyMutationInputSchema } from './PrioritiesToProjectsUpdateManyMutationInputSchema';
import { PrioritiesToProjectsUncheckedUpdateManyWithoutPriorityInputSchema } from './PrioritiesToProjectsUncheckedUpdateManyWithoutPriorityInputSchema';

export const PrioritiesToProjectsUpdateManyWithWhereWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToProjectsUpdateManyWithWhereWithoutPriorityInput> = z.object({
  where: z.lazy(() => PrioritiesToProjectsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PrioritiesToProjectsUpdateManyMutationInputSchema),z.lazy(() => PrioritiesToProjectsUncheckedUpdateManyWithoutPriorityInputSchema) ]),
}).strict();

export default PrioritiesToProjectsUpdateManyWithWhereWithoutPriorityInputSchema;
