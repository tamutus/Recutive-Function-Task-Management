import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTaskWorksCreateWithoutWorkInputSchema } from './PrivateEnergiesToTaskWorksCreateWithoutWorkInputSchema';
import { PrivateEnergiesToTaskWorksUncheckedCreateWithoutWorkInputSchema } from './PrivateEnergiesToTaskWorksUncheckedCreateWithoutWorkInputSchema';
import { PrivateEnergiesToTaskWorksCreateOrConnectWithoutWorkInputSchema } from './PrivateEnergiesToTaskWorksCreateOrConnectWithoutWorkInputSchema';
import { PrivateEnergiesToTaskWorksCreateManyWorkInputEnvelopeSchema } from './PrivateEnergiesToTaskWorksCreateManyWorkInputEnvelopeSchema';
import { PrivateEnergiesToTaskWorksWhereUniqueInputSchema } from './PrivateEnergiesToTaskWorksWhereUniqueInputSchema';

export const PrivateEnergiesToTaskWorksUncheckedCreateNestedManyWithoutWorkInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskWorksUncheckedCreateNestedManyWithoutWorkInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergiesToTaskWorksCreateWithoutWorkInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksCreateWithoutWorkInputSchema).array(),z.lazy(() => PrivateEnergiesToTaskWorksUncheckedCreateWithoutWorkInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksUncheckedCreateWithoutWorkInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateEnergiesToTaskWorksCreateOrConnectWithoutWorkInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksCreateOrConnectWithoutWorkInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateEnergiesToTaskWorksCreateManyWorkInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PrivateEnergiesToTaskWorksWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PrivateEnergiesToTaskWorksUncheckedCreateNestedManyWithoutWorkInputSchema;
