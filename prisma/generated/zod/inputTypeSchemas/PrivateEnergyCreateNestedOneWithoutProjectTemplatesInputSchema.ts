import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyCreateWithoutProjectTemplatesInputSchema } from './PrivateEnergyCreateWithoutProjectTemplatesInputSchema';
import { PrivateEnergyUncheckedCreateWithoutProjectTemplatesInputSchema } from './PrivateEnergyUncheckedCreateWithoutProjectTemplatesInputSchema';
import { PrivateEnergyCreateOrConnectWithoutProjectTemplatesInputSchema } from './PrivateEnergyCreateOrConnectWithoutProjectTemplatesInputSchema';
import { PrivateEnergyWhereUniqueInputSchema } from './PrivateEnergyWhereUniqueInputSchema';

export const PrivateEnergyCreateNestedOneWithoutProjectTemplatesInputSchema: z.ZodType<Prisma.PrivateEnergyCreateNestedOneWithoutProjectTemplatesInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergyCreateWithoutProjectTemplatesInputSchema),z.lazy(() => PrivateEnergyUncheckedCreateWithoutProjectTemplatesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PrivateEnergyCreateOrConnectWithoutProjectTemplatesInputSchema).optional(),
  connect: z.lazy(() => PrivateEnergyWhereUniqueInputSchema).optional()
}).strict();

export default PrivateEnergyCreateNestedOneWithoutProjectTemplatesInputSchema;
