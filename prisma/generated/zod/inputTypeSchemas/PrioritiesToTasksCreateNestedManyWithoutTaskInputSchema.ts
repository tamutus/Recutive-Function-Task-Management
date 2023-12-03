import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToTasksCreateWithoutTaskInputSchema } from './PrioritiesToTasksCreateWithoutTaskInputSchema';
import { PrioritiesToTasksUncheckedCreateWithoutTaskInputSchema } from './PrioritiesToTasksUncheckedCreateWithoutTaskInputSchema';
import { PrioritiesToTasksCreateOrConnectWithoutTaskInputSchema } from './PrioritiesToTasksCreateOrConnectWithoutTaskInputSchema';
import { PrioritiesToTasksCreateManyTaskInputEnvelopeSchema } from './PrioritiesToTasksCreateManyTaskInputEnvelopeSchema';
import { PrioritiesToTasksWhereUniqueInputSchema } from './PrioritiesToTasksWhereUniqueInputSchema';

export const PrioritiesToTasksCreateNestedManyWithoutTaskInputSchema: z.ZodType<Prisma.PrioritiesToTasksCreateNestedManyWithoutTaskInput> = z.object({
  create: z.union([ z.lazy(() => PrioritiesToTasksCreateWithoutTaskInputSchema),z.lazy(() => PrioritiesToTasksCreateWithoutTaskInputSchema).array(),z.lazy(() => PrioritiesToTasksUncheckedCreateWithoutTaskInputSchema),z.lazy(() => PrioritiesToTasksUncheckedCreateWithoutTaskInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrioritiesToTasksCreateOrConnectWithoutTaskInputSchema),z.lazy(() => PrioritiesToTasksCreateOrConnectWithoutTaskInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrioritiesToTasksCreateManyTaskInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PrioritiesToTasksWhereUniqueInputSchema),z.lazy(() => PrioritiesToTasksWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PrioritiesToTasksCreateNestedManyWithoutTaskInputSchema;
