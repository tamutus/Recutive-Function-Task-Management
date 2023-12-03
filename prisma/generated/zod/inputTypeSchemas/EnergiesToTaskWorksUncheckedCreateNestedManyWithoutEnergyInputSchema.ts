import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTaskWorksCreateWithoutEnergyInputSchema } from './EnergiesToTaskWorksCreateWithoutEnergyInputSchema';
import { EnergiesToTaskWorksUncheckedCreateWithoutEnergyInputSchema } from './EnergiesToTaskWorksUncheckedCreateWithoutEnergyInputSchema';
import { EnergiesToTaskWorksCreateOrConnectWithoutEnergyInputSchema } from './EnergiesToTaskWorksCreateOrConnectWithoutEnergyInputSchema';
import { EnergiesToTaskWorksCreateManyEnergyInputEnvelopeSchema } from './EnergiesToTaskWorksCreateManyEnergyInputEnvelopeSchema';
import { EnergiesToTaskWorksWhereUniqueInputSchema } from './EnergiesToTaskWorksWhereUniqueInputSchema';

export const EnergiesToTaskWorksUncheckedCreateNestedManyWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToTaskWorksUncheckedCreateNestedManyWithoutEnergyInput> = z.object({
  create: z.union([ z.lazy(() => EnergiesToTaskWorksCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToTaskWorksCreateWithoutEnergyInputSchema).array(),z.lazy(() => EnergiesToTaskWorksUncheckedCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToTaskWorksUncheckedCreateWithoutEnergyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EnergiesToTaskWorksCreateOrConnectWithoutEnergyInputSchema),z.lazy(() => EnergiesToTaskWorksCreateOrConnectWithoutEnergyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EnergiesToTaskWorksCreateManyEnergyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => EnergiesToTaskWorksWhereUniqueInputSchema),z.lazy(() => EnergiesToTaskWorksWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default EnergiesToTaskWorksUncheckedCreateNestedManyWithoutEnergyInputSchema;
