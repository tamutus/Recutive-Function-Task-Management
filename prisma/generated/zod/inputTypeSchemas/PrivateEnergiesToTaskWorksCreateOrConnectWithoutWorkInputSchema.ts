import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTaskWorksWhereUniqueInputSchema } from './PrivateEnergiesToTaskWorksWhereUniqueInputSchema';
import { PrivateEnergiesToTaskWorksCreateWithoutWorkInputSchema } from './PrivateEnergiesToTaskWorksCreateWithoutWorkInputSchema';
import { PrivateEnergiesToTaskWorksUncheckedCreateWithoutWorkInputSchema } from './PrivateEnergiesToTaskWorksUncheckedCreateWithoutWorkInputSchema';

export const PrivateEnergiesToTaskWorksCreateOrConnectWithoutWorkInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskWorksCreateOrConnectWithoutWorkInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToTaskWorksWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrivateEnergiesToTaskWorksCreateWithoutWorkInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksUncheckedCreateWithoutWorkInputSchema) ]),
}).strict();

export default PrivateEnergiesToTaskWorksCreateOrConnectWithoutWorkInputSchema;
