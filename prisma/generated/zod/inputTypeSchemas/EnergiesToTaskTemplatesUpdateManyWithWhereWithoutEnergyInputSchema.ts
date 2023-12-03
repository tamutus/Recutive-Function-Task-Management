import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTaskTemplatesScalarWhereInputSchema } from './EnergiesToTaskTemplatesScalarWhereInputSchema';
import { EnergiesToTaskTemplatesUpdateManyMutationInputSchema } from './EnergiesToTaskTemplatesUpdateManyMutationInputSchema';
import { EnergiesToTaskTemplatesUncheckedUpdateManyWithoutEnergyInputSchema } from './EnergiesToTaskTemplatesUncheckedUpdateManyWithoutEnergyInputSchema';

export const EnergiesToTaskTemplatesUpdateManyWithWhereWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToTaskTemplatesUpdateManyWithWhereWithoutEnergyInput> = z.object({
  where: z.lazy(() => EnergiesToTaskTemplatesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => EnergiesToTaskTemplatesUpdateManyMutationInputSchema),z.lazy(() => EnergiesToTaskTemplatesUncheckedUpdateManyWithoutEnergyInputSchema) ]),
}).strict();

export default EnergiesToTaskTemplatesUpdateManyWithWhereWithoutEnergyInputSchema;
