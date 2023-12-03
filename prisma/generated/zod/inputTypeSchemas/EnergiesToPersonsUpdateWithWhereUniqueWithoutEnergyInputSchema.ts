import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToPersonsWhereUniqueInputSchema } from './EnergiesToPersonsWhereUniqueInputSchema';
import { EnergiesToPersonsUpdateWithoutEnergyInputSchema } from './EnergiesToPersonsUpdateWithoutEnergyInputSchema';
import { EnergiesToPersonsUncheckedUpdateWithoutEnergyInputSchema } from './EnergiesToPersonsUncheckedUpdateWithoutEnergyInputSchema';

export const EnergiesToPersonsUpdateWithWhereUniqueWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToPersonsUpdateWithWhereUniqueWithoutEnergyInput> = z.object({
  where: z.lazy(() => EnergiesToPersonsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => EnergiesToPersonsUpdateWithoutEnergyInputSchema),z.lazy(() => EnergiesToPersonsUncheckedUpdateWithoutEnergyInputSchema) ]),
}).strict();

export default EnergiesToPersonsUpdateWithWhereUniqueWithoutEnergyInputSchema;
