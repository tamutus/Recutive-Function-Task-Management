import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToProjectsWhereUniqueInputSchema } from './PrioritiesToProjectsWhereUniqueInputSchema';
import { PrioritiesToProjectsUpdateWithoutProjectInputSchema } from './PrioritiesToProjectsUpdateWithoutProjectInputSchema';
import { PrioritiesToProjectsUncheckedUpdateWithoutProjectInputSchema } from './PrioritiesToProjectsUncheckedUpdateWithoutProjectInputSchema';

export const PrioritiesToProjectsUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.PrioritiesToProjectsUpdateWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => PrioritiesToProjectsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PrioritiesToProjectsUpdateWithoutProjectInputSchema),z.lazy(() => PrioritiesToProjectsUncheckedUpdateWithoutProjectInputSchema) ]),
}).strict();

export default PrioritiesToProjectsUpdateWithWhereUniqueWithoutProjectInputSchema;
