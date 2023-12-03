import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyWhereUniqueInputSchema } from './PrivateEnergyWhereUniqueInputSchema';
import { PrivateEnergyCreateWithoutTasksInputSchema } from './PrivateEnergyCreateWithoutTasksInputSchema';
import { PrivateEnergyUncheckedCreateWithoutTasksInputSchema } from './PrivateEnergyUncheckedCreateWithoutTasksInputSchema';

export const PrivateEnergyCreateOrConnectWithoutTasksInputSchema: z.ZodType<Prisma.PrivateEnergyCreateOrConnectWithoutTasksInput> = z.object({
  where: z.lazy(() => PrivateEnergyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrivateEnergyCreateWithoutTasksInputSchema),z.lazy(() => PrivateEnergyUncheckedCreateWithoutTasksInputSchema) ]),
}).strict();

export default PrivateEnergyCreateOrConnectWithoutTasksInputSchema;
