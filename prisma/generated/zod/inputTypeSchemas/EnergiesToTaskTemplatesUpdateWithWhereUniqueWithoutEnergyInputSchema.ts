import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTaskTemplatesWhereUniqueInputSchema } from './EnergiesToTaskTemplatesWhereUniqueInputSchema';
import { EnergiesToTaskTemplatesUpdateWithoutEnergyInputSchema } from './EnergiesToTaskTemplatesUpdateWithoutEnergyInputSchema';
import { EnergiesToTaskTemplatesUncheckedUpdateWithoutEnergyInputSchema } from './EnergiesToTaskTemplatesUncheckedUpdateWithoutEnergyInputSchema';

export const EnergiesToTaskTemplatesUpdateWithWhereUniqueWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToTaskTemplatesUpdateWithWhereUniqueWithoutEnergyInput> = z.object({
  where: z.lazy(() => EnergiesToTaskTemplatesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => EnergiesToTaskTemplatesUpdateWithoutEnergyInputSchema),z.lazy(() => EnergiesToTaskTemplatesUncheckedUpdateWithoutEnergyInputSchema) ]),
}).strict();

export default EnergiesToTaskTemplatesUpdateWithWhereUniqueWithoutEnergyInputSchema;
