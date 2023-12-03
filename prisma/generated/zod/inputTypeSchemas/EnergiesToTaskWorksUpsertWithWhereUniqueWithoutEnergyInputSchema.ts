import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTaskWorksWhereUniqueInputSchema } from './EnergiesToTaskWorksWhereUniqueInputSchema';
import { EnergiesToTaskWorksUpdateWithoutEnergyInputSchema } from './EnergiesToTaskWorksUpdateWithoutEnergyInputSchema';
import { EnergiesToTaskWorksUncheckedUpdateWithoutEnergyInputSchema } from './EnergiesToTaskWorksUncheckedUpdateWithoutEnergyInputSchema';
import { EnergiesToTaskWorksCreateWithoutEnergyInputSchema } from './EnergiesToTaskWorksCreateWithoutEnergyInputSchema';
import { EnergiesToTaskWorksUncheckedCreateWithoutEnergyInputSchema } from './EnergiesToTaskWorksUncheckedCreateWithoutEnergyInputSchema';

export const EnergiesToTaskWorksUpsertWithWhereUniqueWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToTaskWorksUpsertWithWhereUniqueWithoutEnergyInput> = z.object({
  where: z.lazy(() => EnergiesToTaskWorksWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => EnergiesToTaskWorksUpdateWithoutEnergyInputSchema),z.lazy(() => EnergiesToTaskWorksUncheckedUpdateWithoutEnergyInputSchema) ]),
  create: z.union([ z.lazy(() => EnergiesToTaskWorksCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToTaskWorksUncheckedCreateWithoutEnergyInputSchema) ]),
}).strict();

export default EnergiesToTaskWorksUpsertWithWhereUniqueWithoutEnergyInputSchema;
