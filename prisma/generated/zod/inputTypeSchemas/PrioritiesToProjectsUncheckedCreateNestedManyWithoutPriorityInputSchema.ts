import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToProjectsCreateWithoutPriorityInputSchema } from './PrioritiesToProjectsCreateWithoutPriorityInputSchema';
import { PrioritiesToProjectsUncheckedCreateWithoutPriorityInputSchema } from './PrioritiesToProjectsUncheckedCreateWithoutPriorityInputSchema';
import { PrioritiesToProjectsCreateOrConnectWithoutPriorityInputSchema } from './PrioritiesToProjectsCreateOrConnectWithoutPriorityInputSchema';
import { PrioritiesToProjectsCreateManyPriorityInputEnvelopeSchema } from './PrioritiesToProjectsCreateManyPriorityInputEnvelopeSchema';
import { PrioritiesToProjectsWhereUniqueInputSchema } from './PrioritiesToProjectsWhereUniqueInputSchema';

export const PrioritiesToProjectsUncheckedCreateNestedManyWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToProjectsUncheckedCreateNestedManyWithoutPriorityInput> = z.object({
  create: z.union([ z.lazy(() => PrioritiesToProjectsCreateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToProjectsCreateWithoutPriorityInputSchema).array(),z.lazy(() => PrioritiesToProjectsUncheckedCreateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToProjectsUncheckedCreateWithoutPriorityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrioritiesToProjectsCreateOrConnectWithoutPriorityInputSchema),z.lazy(() => PrioritiesToProjectsCreateOrConnectWithoutPriorityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrioritiesToProjectsCreateManyPriorityInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PrioritiesToProjectsWhereUniqueInputSchema),z.lazy(() => PrioritiesToProjectsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PrioritiesToProjectsUncheckedCreateNestedManyWithoutPriorityInputSchema;
