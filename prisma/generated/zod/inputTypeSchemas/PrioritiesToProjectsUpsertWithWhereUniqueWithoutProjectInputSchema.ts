import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToProjectsWhereUniqueInputSchema } from './PrioritiesToProjectsWhereUniqueInputSchema';
import { PrioritiesToProjectsUpdateWithoutProjectInputSchema } from './PrioritiesToProjectsUpdateWithoutProjectInputSchema';
import { PrioritiesToProjectsUncheckedUpdateWithoutProjectInputSchema } from './PrioritiesToProjectsUncheckedUpdateWithoutProjectInputSchema';
import { PrioritiesToProjectsCreateWithoutProjectInputSchema } from './PrioritiesToProjectsCreateWithoutProjectInputSchema';
import { PrioritiesToProjectsUncheckedCreateWithoutProjectInputSchema } from './PrioritiesToProjectsUncheckedCreateWithoutProjectInputSchema';

export const PrioritiesToProjectsUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.PrioritiesToProjectsUpsertWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => PrioritiesToProjectsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PrioritiesToProjectsUpdateWithoutProjectInputSchema),z.lazy(() => PrioritiesToProjectsUncheckedUpdateWithoutProjectInputSchema) ]),
  create: z.union([ z.lazy(() => PrioritiesToProjectsCreateWithoutProjectInputSchema),z.lazy(() => PrioritiesToProjectsUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default PrioritiesToProjectsUpsertWithWhereUniqueWithoutProjectInputSchema;
