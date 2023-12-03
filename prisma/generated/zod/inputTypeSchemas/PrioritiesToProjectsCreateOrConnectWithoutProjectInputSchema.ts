import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToProjectsWhereUniqueInputSchema } from './PrioritiesToProjectsWhereUniqueInputSchema';
import { PrioritiesToProjectsCreateWithoutProjectInputSchema } from './PrioritiesToProjectsCreateWithoutProjectInputSchema';
import { PrioritiesToProjectsUncheckedCreateWithoutProjectInputSchema } from './PrioritiesToProjectsUncheckedCreateWithoutProjectInputSchema';

export const PrioritiesToProjectsCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.PrioritiesToProjectsCreateOrConnectWithoutProjectInput> = z.object({
  where: z.lazy(() => PrioritiesToProjectsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrioritiesToProjectsCreateWithoutProjectInputSchema),z.lazy(() => PrioritiesToProjectsUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default PrioritiesToProjectsCreateOrConnectWithoutProjectInputSchema;
