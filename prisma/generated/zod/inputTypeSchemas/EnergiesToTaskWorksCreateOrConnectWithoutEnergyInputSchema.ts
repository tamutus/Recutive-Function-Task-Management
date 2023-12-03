import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTaskWorksWhereUniqueInputSchema } from './EnergiesToTaskWorksWhereUniqueInputSchema';
import { EnergiesToTaskWorksCreateWithoutEnergyInputSchema } from './EnergiesToTaskWorksCreateWithoutEnergyInputSchema';
import { EnergiesToTaskWorksUncheckedCreateWithoutEnergyInputSchema } from './EnergiesToTaskWorksUncheckedCreateWithoutEnergyInputSchema';

export const EnergiesToTaskWorksCreateOrConnectWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToTaskWorksCreateOrConnectWithoutEnergyInput> = z.object({
  where: z.lazy(() => EnergiesToTaskWorksWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EnergiesToTaskWorksCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToTaskWorksUncheckedCreateWithoutEnergyInputSchema) ]),
}).strict();

export default EnergiesToTaskWorksCreateOrConnectWithoutEnergyInputSchema;
