import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyCreateWithoutPersonInputSchema } from './PrivateEnergyCreateWithoutPersonInputSchema';
import { PrivateEnergyUncheckedCreateWithoutPersonInputSchema } from './PrivateEnergyUncheckedCreateWithoutPersonInputSchema';
import { PrivateEnergyCreateOrConnectWithoutPersonInputSchema } from './PrivateEnergyCreateOrConnectWithoutPersonInputSchema';
import { PrivateEnergyCreateManyPersonInputEnvelopeSchema } from './PrivateEnergyCreateManyPersonInputEnvelopeSchema';
import { PrivateEnergyWhereUniqueInputSchema } from './PrivateEnergyWhereUniqueInputSchema';

export const PrivateEnergyUncheckedCreateNestedManyWithoutPersonInputSchema: z.ZodType<Prisma.PrivateEnergyUncheckedCreateNestedManyWithoutPersonInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergyCreateWithoutPersonInputSchema),z.lazy(() => PrivateEnergyCreateWithoutPersonInputSchema).array(),z.lazy(() => PrivateEnergyUncheckedCreateWithoutPersonInputSchema),z.lazy(() => PrivateEnergyUncheckedCreateWithoutPersonInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateEnergyCreateOrConnectWithoutPersonInputSchema),z.lazy(() => PrivateEnergyCreateOrConnectWithoutPersonInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateEnergyCreateManyPersonInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PrivateEnergyWhereUniqueInputSchema),z.lazy(() => PrivateEnergyWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PrivateEnergyUncheckedCreateNestedManyWithoutPersonInputSchema;
