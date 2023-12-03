import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTaskWorksScalarWhereInputSchema } from './PrivateEnergiesToTaskWorksScalarWhereInputSchema';
import { PrivateEnergiesToTaskWorksUpdateManyMutationInputSchema } from './PrivateEnergiesToTaskWorksUpdateManyMutationInputSchema';
import { PrivateEnergiesToTaskWorksUncheckedUpdateManyWithoutEnergyInputSchema } from './PrivateEnergiesToTaskWorksUncheckedUpdateManyWithoutEnergyInputSchema';

export const PrivateEnergiesToTaskWorksUpdateManyWithWhereWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskWorksUpdateManyWithWhereWithoutEnergyInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToTaskWorksScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PrivateEnergiesToTaskWorksUpdateManyMutationInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksUncheckedUpdateManyWithoutEnergyInputSchema) ]),
}).strict();

export default PrivateEnergiesToTaskWorksUpdateManyWithWhereWithoutEnergyInputSchema;
