import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyWhereUniqueInputSchema } from './PrivateEnergyWhereUniqueInputSchema';
import { PrivateEnergyCreateWithoutProjectTemplatesInputSchema } from './PrivateEnergyCreateWithoutProjectTemplatesInputSchema';
import { PrivateEnergyUncheckedCreateWithoutProjectTemplatesInputSchema } from './PrivateEnergyUncheckedCreateWithoutProjectTemplatesInputSchema';

export const PrivateEnergyCreateOrConnectWithoutProjectTemplatesInputSchema: z.ZodType<Prisma.PrivateEnergyCreateOrConnectWithoutProjectTemplatesInput> = z.object({
  where: z.lazy(() => PrivateEnergyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrivateEnergyCreateWithoutProjectTemplatesInputSchema),z.lazy(() => PrivateEnergyUncheckedCreateWithoutProjectTemplatesInputSchema) ]),
}).strict();

export default PrivateEnergyCreateOrConnectWithoutProjectTemplatesInputSchema;
