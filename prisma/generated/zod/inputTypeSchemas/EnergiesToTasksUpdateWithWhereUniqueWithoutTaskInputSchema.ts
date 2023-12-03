import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTasksWhereUniqueInputSchema } from './EnergiesToTasksWhereUniqueInputSchema';
import { EnergiesToTasksUpdateWithoutTaskInputSchema } from './EnergiesToTasksUpdateWithoutTaskInputSchema';
import { EnergiesToTasksUncheckedUpdateWithoutTaskInputSchema } from './EnergiesToTasksUncheckedUpdateWithoutTaskInputSchema';

export const EnergiesToTasksUpdateWithWhereUniqueWithoutTaskInputSchema: z.ZodType<Prisma.EnergiesToTasksUpdateWithWhereUniqueWithoutTaskInput> = z.object({
  where: z.lazy(() => EnergiesToTasksWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => EnergiesToTasksUpdateWithoutTaskInputSchema),z.lazy(() => EnergiesToTasksUncheckedUpdateWithoutTaskInputSchema) ]),
}).strict();

export default EnergiesToTasksUpdateWithWhereUniqueWithoutTaskInputSchema;
