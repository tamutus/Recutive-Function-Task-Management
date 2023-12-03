import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTasksWhereUniqueInputSchema } from './PrivateEnergiesToTasksWhereUniqueInputSchema';
import { PrivateEnergiesToTasksUpdateWithoutTaskInputSchema } from './PrivateEnergiesToTasksUpdateWithoutTaskInputSchema';
import { PrivateEnergiesToTasksUncheckedUpdateWithoutTaskInputSchema } from './PrivateEnergiesToTasksUncheckedUpdateWithoutTaskInputSchema';

export const PrivateEnergiesToTasksUpdateWithWhereUniqueWithoutTaskInputSchema: z.ZodType<Prisma.PrivateEnergiesToTasksUpdateWithWhereUniqueWithoutTaskInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToTasksWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PrivateEnergiesToTasksUpdateWithoutTaskInputSchema),z.lazy(() => PrivateEnergiesToTasksUncheckedUpdateWithoutTaskInputSchema) ]),
}).strict();

export default PrivateEnergiesToTasksUpdateWithWhereUniqueWithoutTaskInputSchema;
