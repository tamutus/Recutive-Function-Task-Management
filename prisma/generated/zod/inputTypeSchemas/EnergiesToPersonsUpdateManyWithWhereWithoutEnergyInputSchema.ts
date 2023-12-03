import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToPersonsScalarWhereInputSchema } from './EnergiesToPersonsScalarWhereInputSchema';
import { EnergiesToPersonsUpdateManyMutationInputSchema } from './EnergiesToPersonsUpdateManyMutationInputSchema';
import { EnergiesToPersonsUncheckedUpdateManyWithoutEnergyInputSchema } from './EnergiesToPersonsUncheckedUpdateManyWithoutEnergyInputSchema';

export const EnergiesToPersonsUpdateManyWithWhereWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToPersonsUpdateManyWithWhereWithoutEnergyInput> = z.object({
  where: z.lazy(() => EnergiesToPersonsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => EnergiesToPersonsUpdateManyMutationInputSchema),z.lazy(() => EnergiesToPersonsUncheckedUpdateManyWithoutEnergyInputSchema) ]),
}).strict();

export default EnergiesToPersonsUpdateManyWithWhereWithoutEnergyInputSchema;
