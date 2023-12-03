import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTaskWorksCreateWithoutEnergyInputSchema } from './PrivateEnergiesToTaskWorksCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToTaskWorksUncheckedCreateWithoutEnergyInputSchema } from './PrivateEnergiesToTaskWorksUncheckedCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToTaskWorksCreateOrConnectWithoutEnergyInputSchema } from './PrivateEnergiesToTaskWorksCreateOrConnectWithoutEnergyInputSchema';
import { PrivateEnergiesToTaskWorksCreateManyEnergyInputEnvelopeSchema } from './PrivateEnergiesToTaskWorksCreateManyEnergyInputEnvelopeSchema';
import { PrivateEnergiesToTaskWorksWhereUniqueInputSchema } from './PrivateEnergiesToTaskWorksWhereUniqueInputSchema';

export const PrivateEnergiesToTaskWorksUncheckedCreateNestedManyWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskWorksUncheckedCreateNestedManyWithoutEnergyInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergiesToTaskWorksCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksCreateWithoutEnergyInputSchema).array(),z.lazy(() => PrivateEnergiesToTaskWorksUncheckedCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksUncheckedCreateWithoutEnergyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateEnergiesToTaskWorksCreateOrConnectWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksCreateOrConnectWithoutEnergyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateEnergiesToTaskWorksCreateManyEnergyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PrivateEnergiesToTaskWorksWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PrivateEnergiesToTaskWorksUncheckedCreateNestedManyWithoutEnergyInputSchema;
