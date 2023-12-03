import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTagsWhereUniqueInputSchema } from './EnergiesToTagsWhereUniqueInputSchema';
import { EnergiesToTagsUpdateWithoutEnergyInputSchema } from './EnergiesToTagsUpdateWithoutEnergyInputSchema';
import { EnergiesToTagsUncheckedUpdateWithoutEnergyInputSchema } from './EnergiesToTagsUncheckedUpdateWithoutEnergyInputSchema';

export const EnergiesToTagsUpdateWithWhereUniqueWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToTagsUpdateWithWhereUniqueWithoutEnergyInput> = z.object({
  where: z.lazy(() => EnergiesToTagsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => EnergiesToTagsUpdateWithoutEnergyInputSchema),z.lazy(() => EnergiesToTagsUncheckedUpdateWithoutEnergyInputSchema) ]),
}).strict();

export default EnergiesToTagsUpdateWithWhereUniqueWithoutEnergyInputSchema;
