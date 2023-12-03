import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyCreateWithoutProjectsInputSchema } from './PrivateEnergyCreateWithoutProjectsInputSchema';
import { PrivateEnergyUncheckedCreateWithoutProjectsInputSchema } from './PrivateEnergyUncheckedCreateWithoutProjectsInputSchema';
import { PrivateEnergyCreateOrConnectWithoutProjectsInputSchema } from './PrivateEnergyCreateOrConnectWithoutProjectsInputSchema';
import { PrivateEnergyWhereUniqueInputSchema } from './PrivateEnergyWhereUniqueInputSchema';

export const PrivateEnergyCreateNestedOneWithoutProjectsInputSchema: z.ZodType<Prisma.PrivateEnergyCreateNestedOneWithoutProjectsInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergyCreateWithoutProjectsInputSchema),z.lazy(() => PrivateEnergyUncheckedCreateWithoutProjectsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PrivateEnergyCreateOrConnectWithoutProjectsInputSchema).optional(),
  connect: z.lazy(() => PrivateEnergyWhereUniqueInputSchema).optional()
}).strict();

export default PrivateEnergyCreateNestedOneWithoutProjectsInputSchema;
