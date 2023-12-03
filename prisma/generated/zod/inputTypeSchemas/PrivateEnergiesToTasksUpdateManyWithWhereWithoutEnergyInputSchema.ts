import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTasksScalarWhereInputSchema } from './PrivateEnergiesToTasksScalarWhereInputSchema';
import { PrivateEnergiesToTasksUpdateManyMutationInputSchema } from './PrivateEnergiesToTasksUpdateManyMutationInputSchema';
import { PrivateEnergiesToTasksUncheckedUpdateManyWithoutEnergyInputSchema } from './PrivateEnergiesToTasksUncheckedUpdateManyWithoutEnergyInputSchema';

export const PrivateEnergiesToTasksUpdateManyWithWhereWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToTasksUpdateManyWithWhereWithoutEnergyInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToTasksScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PrivateEnergiesToTasksUpdateManyMutationInputSchema),z.lazy(() => PrivateEnergiesToTasksUncheckedUpdateManyWithoutEnergyInputSchema) ]),
}).strict();

export default PrivateEnergiesToTasksUpdateManyWithWhereWithoutEnergyInputSchema;
