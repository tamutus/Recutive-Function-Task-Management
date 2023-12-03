import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToProjectsWhereUniqueInputSchema } from './PrioritiesToProjectsWhereUniqueInputSchema';
import { PrioritiesToProjectsUpdateWithoutPriorityInputSchema } from './PrioritiesToProjectsUpdateWithoutPriorityInputSchema';
import { PrioritiesToProjectsUncheckedUpdateWithoutPriorityInputSchema } from './PrioritiesToProjectsUncheckedUpdateWithoutPriorityInputSchema';
import { PrioritiesToProjectsCreateWithoutPriorityInputSchema } from './PrioritiesToProjectsCreateWithoutPriorityInputSchema';
import { PrioritiesToProjectsUncheckedCreateWithoutPriorityInputSchema } from './PrioritiesToProjectsUncheckedCreateWithoutPriorityInputSchema';

export const PrioritiesToProjectsUpsertWithWhereUniqueWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToProjectsUpsertWithWhereUniqueWithoutPriorityInput> = z.object({
  where: z.lazy(() => PrioritiesToProjectsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PrioritiesToProjectsUpdateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToProjectsUncheckedUpdateWithoutPriorityInputSchema) ]),
  create: z.union([ z.lazy(() => PrioritiesToProjectsCreateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToProjectsUncheckedCreateWithoutPriorityInputSchema) ]),
}).strict();

export default PrioritiesToProjectsUpsertWithWhereUniqueWithoutPriorityInputSchema;
