import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTagsScalarWhereInputSchema } from './EnergiesToTagsScalarWhereInputSchema';
import { EnergiesToTagsUpdateManyMutationInputSchema } from './EnergiesToTagsUpdateManyMutationInputSchema';
import { EnergiesToTagsUncheckedUpdateManyWithoutEnergyInputSchema } from './EnergiesToTagsUncheckedUpdateManyWithoutEnergyInputSchema';

export const EnergiesToTagsUpdateManyWithWhereWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToTagsUpdateManyWithWhereWithoutEnergyInput> = z.object({
  where: z.lazy(() => EnergiesToTagsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => EnergiesToTagsUpdateManyMutationInputSchema),z.lazy(() => EnergiesToTagsUncheckedUpdateManyWithoutEnergyInputSchema) ]),
}).strict();

export default EnergiesToTagsUpdateManyWithWhereWithoutEnergyInputSchema;
