import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToProjectsScalarWhereInputSchema } from './PrioritiesToProjectsScalarWhereInputSchema';
import { PrioritiesToProjectsUpdateManyMutationInputSchema } from './PrioritiesToProjectsUpdateManyMutationInputSchema';
import { PrioritiesToProjectsUncheckedUpdateManyWithoutProjectInputSchema } from './PrioritiesToProjectsUncheckedUpdateManyWithoutProjectInputSchema';

export const PrioritiesToProjectsUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.PrioritiesToProjectsUpdateManyWithWhereWithoutProjectInput> = z.object({
  where: z.lazy(() => PrioritiesToProjectsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PrioritiesToProjectsUpdateManyMutationInputSchema),z.lazy(() => PrioritiesToProjectsUncheckedUpdateManyWithoutProjectInputSchema) ]),
}).strict();

export default PrioritiesToProjectsUpdateManyWithWhereWithoutProjectInputSchema;
