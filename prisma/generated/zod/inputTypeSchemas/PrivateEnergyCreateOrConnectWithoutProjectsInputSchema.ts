import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyWhereUniqueInputSchema } from './PrivateEnergyWhereUniqueInputSchema';
import { PrivateEnergyCreateWithoutProjectsInputSchema } from './PrivateEnergyCreateWithoutProjectsInputSchema';
import { PrivateEnergyUncheckedCreateWithoutProjectsInputSchema } from './PrivateEnergyUncheckedCreateWithoutProjectsInputSchema';

export const PrivateEnergyCreateOrConnectWithoutProjectsInputSchema: z.ZodType<Prisma.PrivateEnergyCreateOrConnectWithoutProjectsInput> = z.object({
  where: z.lazy(() => PrivateEnergyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrivateEnergyCreateWithoutProjectsInputSchema),z.lazy(() => PrivateEnergyUncheckedCreateWithoutProjectsInputSchema) ]),
}).strict();

export default PrivateEnergyCreateOrConnectWithoutProjectsInputSchema;
