import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTaskWorksScalarWhereInputSchema } from './EnergiesToTaskWorksScalarWhereInputSchema';
import { EnergiesToTaskWorksUpdateManyMutationInputSchema } from './EnergiesToTaskWorksUpdateManyMutationInputSchema';
import { EnergiesToTaskWorksUncheckedUpdateManyWithoutEnergyInputSchema } from './EnergiesToTaskWorksUncheckedUpdateManyWithoutEnergyInputSchema';

export const EnergiesToTaskWorksUpdateManyWithWhereWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToTaskWorksUpdateManyWithWhereWithoutEnergyInput> = z.object({
  where: z.lazy(() => EnergiesToTaskWorksScalarWhereInputSchema),
  data: z.union([ z.lazy(() => EnergiesToTaskWorksUpdateManyMutationInputSchema),z.lazy(() => EnergiesToTaskWorksUncheckedUpdateManyWithoutEnergyInputSchema) ]),
}).strict();

export default EnergiesToTaskWorksUpdateManyWithWhereWithoutEnergyInputSchema;
