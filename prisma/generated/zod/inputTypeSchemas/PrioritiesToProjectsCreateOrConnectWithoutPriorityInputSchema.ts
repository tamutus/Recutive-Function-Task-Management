import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToProjectsWhereUniqueInputSchema } from './PrioritiesToProjectsWhereUniqueInputSchema';
import { PrioritiesToProjectsCreateWithoutPriorityInputSchema } from './PrioritiesToProjectsCreateWithoutPriorityInputSchema';
import { PrioritiesToProjectsUncheckedCreateWithoutPriorityInputSchema } from './PrioritiesToProjectsUncheckedCreateWithoutPriorityInputSchema';

export const PrioritiesToProjectsCreateOrConnectWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToProjectsCreateOrConnectWithoutPriorityInput> = z.object({
  where: z.lazy(() => PrioritiesToProjectsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrioritiesToProjectsCreateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToProjectsUncheckedCreateWithoutPriorityInputSchema) ]),
}).strict();

export default PrioritiesToProjectsCreateOrConnectWithoutPriorityInputSchema;
