import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToTasksWhereUniqueInputSchema } from './PrioritiesToTasksWhereUniqueInputSchema';
import { PrioritiesToTasksUpdateWithoutTaskInputSchema } from './PrioritiesToTasksUpdateWithoutTaskInputSchema';
import { PrioritiesToTasksUncheckedUpdateWithoutTaskInputSchema } from './PrioritiesToTasksUncheckedUpdateWithoutTaskInputSchema';

export const PrioritiesToTasksUpdateWithWhereUniqueWithoutTaskInputSchema: z.ZodType<Prisma.PrioritiesToTasksUpdateWithWhereUniqueWithoutTaskInput> = z.object({
  where: z.lazy(() => PrioritiesToTasksWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PrioritiesToTasksUpdateWithoutTaskInputSchema),z.lazy(() => PrioritiesToTasksUncheckedUpdateWithoutTaskInputSchema) ]),
}).strict();

export default PrioritiesToTasksUpdateWithWhereUniqueWithoutTaskInputSchema;
