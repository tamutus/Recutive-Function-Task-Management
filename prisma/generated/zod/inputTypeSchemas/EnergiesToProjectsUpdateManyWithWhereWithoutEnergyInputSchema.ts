import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToProjectsScalarWhereInputSchema } from './EnergiesToProjectsScalarWhereInputSchema';
import { EnergiesToProjectsUpdateManyMutationInputSchema } from './EnergiesToProjectsUpdateManyMutationInputSchema';
import { EnergiesToProjectsUncheckedUpdateManyWithoutEnergyInputSchema } from './EnergiesToProjectsUncheckedUpdateManyWithoutEnergyInputSchema';

export const EnergiesToProjectsUpdateManyWithWhereWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToProjectsUpdateManyWithWhereWithoutEnergyInput> = z.object({
  where: z.lazy(() => EnergiesToProjectsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => EnergiesToProjectsUpdateManyMutationInputSchema),z.lazy(() => EnergiesToProjectsUncheckedUpdateManyWithoutEnergyInputSchema) ]),
}).strict();

export default EnergiesToProjectsUpdateManyWithWhereWithoutEnergyInputSchema;
