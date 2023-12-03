import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTasksWhereUniqueInputSchema } from './PrivateEnergiesToTasksWhereUniqueInputSchema';
import { PrivateEnergiesToTasksUpdateWithoutEnergyInputSchema } from './PrivateEnergiesToTasksUpdateWithoutEnergyInputSchema';
import { PrivateEnergiesToTasksUncheckedUpdateWithoutEnergyInputSchema } from './PrivateEnergiesToTasksUncheckedUpdateWithoutEnergyInputSchema';

export const PrivateEnergiesToTasksUpdateWithWhereUniqueWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToTasksUpdateWithWhereUniqueWithoutEnergyInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToTasksWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PrivateEnergiesToTasksUpdateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTasksUncheckedUpdateWithoutEnergyInputSchema) ]),
}).strict();

export default PrivateEnergiesToTasksUpdateWithWhereUniqueWithoutEnergyInputSchema;
