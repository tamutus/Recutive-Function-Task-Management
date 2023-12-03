import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyCreateWithoutTasksInputSchema } from './PrivateEnergyCreateWithoutTasksInputSchema';
import { PrivateEnergyUncheckedCreateWithoutTasksInputSchema } from './PrivateEnergyUncheckedCreateWithoutTasksInputSchema';
import { PrivateEnergyCreateOrConnectWithoutTasksInputSchema } from './PrivateEnergyCreateOrConnectWithoutTasksInputSchema';
import { PrivateEnergyWhereUniqueInputSchema } from './PrivateEnergyWhereUniqueInputSchema';

export const PrivateEnergyCreateNestedOneWithoutTasksInputSchema: z.ZodType<Prisma.PrivateEnergyCreateNestedOneWithoutTasksInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergyCreateWithoutTasksInputSchema),z.lazy(() => PrivateEnergyUncheckedCreateWithoutTasksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PrivateEnergyCreateOrConnectWithoutTasksInputSchema).optional(),
  connect: z.lazy(() => PrivateEnergyWhereUniqueInputSchema).optional()
}).strict();

export default PrivateEnergyCreateNestedOneWithoutTasksInputSchema;
