import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToTasksCreateWithoutPriorityInputSchema } from './PrioritiesToTasksCreateWithoutPriorityInputSchema';
import { PrioritiesToTasksUncheckedCreateWithoutPriorityInputSchema } from './PrioritiesToTasksUncheckedCreateWithoutPriorityInputSchema';
import { PrioritiesToTasksCreateOrConnectWithoutPriorityInputSchema } from './PrioritiesToTasksCreateOrConnectWithoutPriorityInputSchema';
import { PrioritiesToTasksCreateManyPriorityInputEnvelopeSchema } from './PrioritiesToTasksCreateManyPriorityInputEnvelopeSchema';
import { PrioritiesToTasksWhereUniqueInputSchema } from './PrioritiesToTasksWhereUniqueInputSchema';

export const PrioritiesToTasksUncheckedCreateNestedManyWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToTasksUncheckedCreateNestedManyWithoutPriorityInput> = z.object({
  create: z.union([ z.lazy(() => PrioritiesToTasksCreateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToTasksCreateWithoutPriorityInputSchema).array(),z.lazy(() => PrioritiesToTasksUncheckedCreateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToTasksUncheckedCreateWithoutPriorityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrioritiesToTasksCreateOrConnectWithoutPriorityInputSchema),z.lazy(() => PrioritiesToTasksCreateOrConnectWithoutPriorityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrioritiesToTasksCreateManyPriorityInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PrioritiesToTasksWhereUniqueInputSchema),z.lazy(() => PrioritiesToTasksWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PrioritiesToTasksUncheckedCreateNestedManyWithoutPriorityInputSchema;
