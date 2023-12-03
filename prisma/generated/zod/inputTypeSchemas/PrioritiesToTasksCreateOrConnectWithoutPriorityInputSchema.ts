import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToTasksWhereUniqueInputSchema } from './PrioritiesToTasksWhereUniqueInputSchema';
import { PrioritiesToTasksCreateWithoutPriorityInputSchema } from './PrioritiesToTasksCreateWithoutPriorityInputSchema';
import { PrioritiesToTasksUncheckedCreateWithoutPriorityInputSchema } from './PrioritiesToTasksUncheckedCreateWithoutPriorityInputSchema';

export const PrioritiesToTasksCreateOrConnectWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToTasksCreateOrConnectWithoutPriorityInput> = z.object({
  where: z.lazy(() => PrioritiesToTasksWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrioritiesToTasksCreateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToTasksUncheckedCreateWithoutPriorityInputSchema) ]),
}).strict();

export default PrioritiesToTasksCreateOrConnectWithoutPriorityInputSchema;
