import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToProjectsCreateWithoutProjectInputSchema } from './PrioritiesToProjectsCreateWithoutProjectInputSchema';
import { PrioritiesToProjectsUncheckedCreateWithoutProjectInputSchema } from './PrioritiesToProjectsUncheckedCreateWithoutProjectInputSchema';
import { PrioritiesToProjectsCreateOrConnectWithoutProjectInputSchema } from './PrioritiesToProjectsCreateOrConnectWithoutProjectInputSchema';
import { PrioritiesToProjectsCreateManyProjectInputEnvelopeSchema } from './PrioritiesToProjectsCreateManyProjectInputEnvelopeSchema';
import { PrioritiesToProjectsWhereUniqueInputSchema } from './PrioritiesToProjectsWhereUniqueInputSchema';

export const PrioritiesToProjectsCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.PrioritiesToProjectsCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => PrioritiesToProjectsCreateWithoutProjectInputSchema),z.lazy(() => PrioritiesToProjectsCreateWithoutProjectInputSchema).array(),z.lazy(() => PrioritiesToProjectsUncheckedCreateWithoutProjectInputSchema),z.lazy(() => PrioritiesToProjectsUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrioritiesToProjectsCreateOrConnectWithoutProjectInputSchema),z.lazy(() => PrioritiesToProjectsCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrioritiesToProjectsCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PrioritiesToProjectsWhereUniqueInputSchema),z.lazy(() => PrioritiesToProjectsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PrioritiesToProjectsCreateNestedManyWithoutProjectInputSchema;
