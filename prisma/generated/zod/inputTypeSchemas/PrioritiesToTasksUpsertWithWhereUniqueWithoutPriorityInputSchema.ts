import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToTasksWhereUniqueInputSchema } from './PrioritiesToTasksWhereUniqueInputSchema';
import { PrioritiesToTasksUpdateWithoutPriorityInputSchema } from './PrioritiesToTasksUpdateWithoutPriorityInputSchema';
import { PrioritiesToTasksUncheckedUpdateWithoutPriorityInputSchema } from './PrioritiesToTasksUncheckedUpdateWithoutPriorityInputSchema';
import { PrioritiesToTasksCreateWithoutPriorityInputSchema } from './PrioritiesToTasksCreateWithoutPriorityInputSchema';
import { PrioritiesToTasksUncheckedCreateWithoutPriorityInputSchema } from './PrioritiesToTasksUncheckedCreateWithoutPriorityInputSchema';

export const PrioritiesToTasksUpsertWithWhereUniqueWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToTasksUpsertWithWhereUniqueWithoutPriorityInput> = z.object({
  where: z.lazy(() => PrioritiesToTasksWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PrioritiesToTasksUpdateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToTasksUncheckedUpdateWithoutPriorityInputSchema) ]),
  create: z.union([ z.lazy(() => PrioritiesToTasksCreateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToTasksUncheckedCreateWithoutPriorityInputSchema) ]),
}).strict();

export default PrioritiesToTasksUpsertWithWhereUniqueWithoutPriorityInputSchema;
