import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTaskWorksWhereUniqueInputSchema } from './PrivateEnergiesToTaskWorksWhereUniqueInputSchema';
import { PrivateEnergiesToTaskWorksCreateWithoutEnergyInputSchema } from './PrivateEnergiesToTaskWorksCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToTaskWorksUncheckedCreateWithoutEnergyInputSchema } from './PrivateEnergiesToTaskWorksUncheckedCreateWithoutEnergyInputSchema';

export const PrivateEnergiesToTaskWorksCreateOrConnectWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskWorksCreateOrConnectWithoutEnergyInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToTaskWorksWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrivateEnergiesToTaskWorksCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksUncheckedCreateWithoutEnergyInputSchema) ]),
}).strict();

export default PrivateEnergiesToTaskWorksCreateOrConnectWithoutEnergyInputSchema;
