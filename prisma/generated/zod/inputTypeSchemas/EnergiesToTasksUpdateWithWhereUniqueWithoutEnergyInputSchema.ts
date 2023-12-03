import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTasksWhereUniqueInputSchema } from './EnergiesToTasksWhereUniqueInputSchema';
import { EnergiesToTasksUpdateWithoutEnergyInputSchema } from './EnergiesToTasksUpdateWithoutEnergyInputSchema';
import { EnergiesToTasksUncheckedUpdateWithoutEnergyInputSchema } from './EnergiesToTasksUncheckedUpdateWithoutEnergyInputSchema';

export const EnergiesToTasksUpdateWithWhereUniqueWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToTasksUpdateWithWhereUniqueWithoutEnergyInput> = z.object({
  where: z.lazy(() => EnergiesToTasksWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => EnergiesToTasksUpdateWithoutEnergyInputSchema),z.lazy(() => EnergiesToTasksUncheckedUpdateWithoutEnergyInputSchema) ]),
}).strict();

export default EnergiesToTasksUpdateWithWhereUniqueWithoutEnergyInputSchema;
