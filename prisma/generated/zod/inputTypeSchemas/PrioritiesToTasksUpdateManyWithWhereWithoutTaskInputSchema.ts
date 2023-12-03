import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToTasksScalarWhereInputSchema } from './PrioritiesToTasksScalarWhereInputSchema';
import { PrioritiesToTasksUpdateManyMutationInputSchema } from './PrioritiesToTasksUpdateManyMutationInputSchema';
import { PrioritiesToTasksUncheckedUpdateManyWithoutTaskInputSchema } from './PrioritiesToTasksUncheckedUpdateManyWithoutTaskInputSchema';

export const PrioritiesToTasksUpdateManyWithWhereWithoutTaskInputSchema: z.ZodType<Prisma.PrioritiesToTasksUpdateManyWithWhereWithoutTaskInput> = z.object({
  where: z.lazy(() => PrioritiesToTasksScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PrioritiesToTasksUpdateManyMutationInputSchema),z.lazy(() => PrioritiesToTasksUncheckedUpdateManyWithoutTaskInputSchema) ]),
}).strict();

export default PrioritiesToTasksUpdateManyWithWhereWithoutTaskInputSchema;
