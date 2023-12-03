import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToProjectsWhereUniqueInputSchema } from './EnergiesToProjectsWhereUniqueInputSchema';
import { EnergiesToProjectsUpdateWithoutEnergyInputSchema } from './EnergiesToProjectsUpdateWithoutEnergyInputSchema';
import { EnergiesToProjectsUncheckedUpdateWithoutEnergyInputSchema } from './EnergiesToProjectsUncheckedUpdateWithoutEnergyInputSchema';

export const EnergiesToProjectsUpdateWithWhereUniqueWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToProjectsUpdateWithWhereUniqueWithoutEnergyInput> = z.object({
  where: z.lazy(() => EnergiesToProjectsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => EnergiesToProjectsUpdateWithoutEnergyInputSchema),z.lazy(() => EnergiesToProjectsUncheckedUpdateWithoutEnergyInputSchema) ]),
}).strict();

export default EnergiesToProjectsUpdateWithWhereUniqueWithoutEnergyInputSchema;
