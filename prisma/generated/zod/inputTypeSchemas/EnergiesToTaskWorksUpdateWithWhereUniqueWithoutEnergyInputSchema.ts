import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTaskWorksWhereUniqueInputSchema } from './EnergiesToTaskWorksWhereUniqueInputSchema';
import { EnergiesToTaskWorksUpdateWithoutEnergyInputSchema } from './EnergiesToTaskWorksUpdateWithoutEnergyInputSchema';
import { EnergiesToTaskWorksUncheckedUpdateWithoutEnergyInputSchema } from './EnergiesToTaskWorksUncheckedUpdateWithoutEnergyInputSchema';

export const EnergiesToTaskWorksUpdateWithWhereUniqueWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToTaskWorksUpdateWithWhereUniqueWithoutEnergyInput> = z.object({
  where: z.lazy(() => EnergiesToTaskWorksWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => EnergiesToTaskWorksUpdateWithoutEnergyInputSchema),z.lazy(() => EnergiesToTaskWorksUncheckedUpdateWithoutEnergyInputSchema) ]),
}).strict();

export default EnergiesToTaskWorksUpdateWithWhereUniqueWithoutEnergyInputSchema;
