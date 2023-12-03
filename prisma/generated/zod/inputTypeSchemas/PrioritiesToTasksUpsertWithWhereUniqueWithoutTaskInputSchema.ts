import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToTasksWhereUniqueInputSchema } from './PrioritiesToTasksWhereUniqueInputSchema';
import { PrioritiesToTasksUpdateWithoutTaskInputSchema } from './PrioritiesToTasksUpdateWithoutTaskInputSchema';
import { PrioritiesToTasksUncheckedUpdateWithoutTaskInputSchema } from './PrioritiesToTasksUncheckedUpdateWithoutTaskInputSchema';
import { PrioritiesToTasksCreateWithoutTaskInputSchema } from './PrioritiesToTasksCreateWithoutTaskInputSchema';
import { PrioritiesToTasksUncheckedCreateWithoutTaskInputSchema } from './PrioritiesToTasksUncheckedCreateWithoutTaskInputSchema';

export const PrioritiesToTasksUpsertWithWhereUniqueWithoutTaskInputSchema: z.ZodType<Prisma.PrioritiesToTasksUpsertWithWhereUniqueWithoutTaskInput> = z.object({
  where: z.lazy(() => PrioritiesToTasksWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PrioritiesToTasksUpdateWithoutTaskInputSchema),z.lazy(() => PrioritiesToTasksUncheckedUpdateWithoutTaskInputSchema) ]),
  create: z.union([ z.lazy(() => PrioritiesToTasksCreateWithoutTaskInputSchema),z.lazy(() => PrioritiesToTasksUncheckedCreateWithoutTaskInputSchema) ]),
}).strict();

export default PrioritiesToTasksUpsertWithWhereUniqueWithoutTaskInputSchema;
