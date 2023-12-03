import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyWhereUniqueInputSchema } from './PrivateEnergyWhereUniqueInputSchema';
import { PrivateEnergyCreateWithoutPersonInputSchema } from './PrivateEnergyCreateWithoutPersonInputSchema';
import { PrivateEnergyUncheckedCreateWithoutPersonInputSchema } from './PrivateEnergyUncheckedCreateWithoutPersonInputSchema';

export const PrivateEnergyCreateOrConnectWithoutPersonInputSchema: z.ZodType<Prisma.PrivateEnergyCreateOrConnectWithoutPersonInput> = z.object({
  where: z.lazy(() => PrivateEnergyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrivateEnergyCreateWithoutPersonInputSchema),z.lazy(() => PrivateEnergyUncheckedCreateWithoutPersonInputSchema) ]),
}).strict();

export default PrivateEnergyCreateOrConnectWithoutPersonInputSchema;
