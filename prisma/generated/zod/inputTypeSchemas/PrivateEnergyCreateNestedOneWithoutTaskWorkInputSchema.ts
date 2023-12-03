import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyCreateWithoutTaskWorkInputSchema } from './PrivateEnergyCreateWithoutTaskWorkInputSchema';
import { PrivateEnergyUncheckedCreateWithoutTaskWorkInputSchema } from './PrivateEnergyUncheckedCreateWithoutTaskWorkInputSchema';
import { PrivateEnergyCreateOrConnectWithoutTaskWorkInputSchema } from './PrivateEnergyCreateOrConnectWithoutTaskWorkInputSchema';
import { PrivateEnergyWhereUniqueInputSchema } from './PrivateEnergyWhereUniqueInputSchema';

export const PrivateEnergyCreateNestedOneWithoutTaskWorkInputSchema: z.ZodType<Prisma.PrivateEnergyCreateNestedOneWithoutTaskWorkInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergyCreateWithoutTaskWorkInputSchema),z.lazy(() => PrivateEnergyUncheckedCreateWithoutTaskWorkInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PrivateEnergyCreateOrConnectWithoutTaskWorkInputSchema).optional(),
  connect: z.lazy(() => PrivateEnergyWhereUniqueInputSchema).optional()
}).strict();

export default PrivateEnergyCreateNestedOneWithoutTaskWorkInputSchema;
