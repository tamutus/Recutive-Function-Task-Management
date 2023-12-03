import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTasksScalarWhereInputSchema } from './EnergiesToTasksScalarWhereInputSchema';
import { EnergiesToTasksUpdateManyMutationInputSchema } from './EnergiesToTasksUpdateManyMutationInputSchema';
import { EnergiesToTasksUncheckedUpdateManyWithoutEnergyInputSchema } from './EnergiesToTasksUncheckedUpdateManyWithoutEnergyInputSchema';

export const EnergiesToTasksUpdateManyWithWhereWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToTasksUpdateManyWithWhereWithoutEnergyInput> = z.object({
  where: z.lazy(() => EnergiesToTasksScalarWhereInputSchema),
  data: z.union([ z.lazy(() => EnergiesToTasksUpdateManyMutationInputSchema),z.lazy(() => EnergiesToTasksUncheckedUpdateManyWithoutEnergyInputSchema) ]),
}).strict();

export default EnergiesToTasksUpdateManyWithWhereWithoutEnergyInputSchema;
