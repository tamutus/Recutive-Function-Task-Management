import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToTasksWhereUniqueInputSchema } from './PrioritiesToTasksWhereUniqueInputSchema';
import { PrioritiesToTasksCreateWithoutTaskInputSchema } from './PrioritiesToTasksCreateWithoutTaskInputSchema';
import { PrioritiesToTasksUncheckedCreateWithoutTaskInputSchema } from './PrioritiesToTasksUncheckedCreateWithoutTaskInputSchema';

export const PrioritiesToTasksCreateOrConnectWithoutTaskInputSchema: z.ZodType<Prisma.PrioritiesToTasksCreateOrConnectWithoutTaskInput> = z.object({
  where: z.lazy(() => PrioritiesToTasksWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrioritiesToTasksCreateWithoutTaskInputSchema),z.lazy(() => PrioritiesToTasksUncheckedCreateWithoutTaskInputSchema) ]),
}).strict();

export default PrioritiesToTasksCreateOrConnectWithoutTaskInputSchema;
