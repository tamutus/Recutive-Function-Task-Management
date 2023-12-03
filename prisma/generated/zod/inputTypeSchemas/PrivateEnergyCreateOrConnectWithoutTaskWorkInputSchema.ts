import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyWhereUniqueInputSchema } from './PrivateEnergyWhereUniqueInputSchema';
import { PrivateEnergyCreateWithoutTaskWorkInputSchema } from './PrivateEnergyCreateWithoutTaskWorkInputSchema';
import { PrivateEnergyUncheckedCreateWithoutTaskWorkInputSchema } from './PrivateEnergyUncheckedCreateWithoutTaskWorkInputSchema';

export const PrivateEnergyCreateOrConnectWithoutTaskWorkInputSchema: z.ZodType<Prisma.PrivateEnergyCreateOrConnectWithoutTaskWorkInput> = z.object({
  where: z.lazy(() => PrivateEnergyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrivateEnergyCreateWithoutTaskWorkInputSchema),z.lazy(() => PrivateEnergyUncheckedCreateWithoutTaskWorkInputSchema) ]),
}).strict();

export default PrivateEnergyCreateOrConnectWithoutTaskWorkInputSchema;
