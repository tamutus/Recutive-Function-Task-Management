import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyWhereUniqueInputSchema } from './PrivateEnergyWhereUniqueInputSchema';
import { PrivateEnergyCreateWithoutTaskTemplatesInputSchema } from './PrivateEnergyCreateWithoutTaskTemplatesInputSchema';
import { PrivateEnergyUncheckedCreateWithoutTaskTemplatesInputSchema } from './PrivateEnergyUncheckedCreateWithoutTaskTemplatesInputSchema';

export const PrivateEnergyCreateOrConnectWithoutTaskTemplatesInputSchema: z.ZodType<Prisma.PrivateEnergyCreateOrConnectWithoutTaskTemplatesInput> = z.object({
  where: z.lazy(() => PrivateEnergyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrivateEnergyCreateWithoutTaskTemplatesInputSchema),z.lazy(() => PrivateEnergyUncheckedCreateWithoutTaskTemplatesInputSchema) ]),
}).strict();

export default PrivateEnergyCreateOrConnectWithoutTaskTemplatesInputSchema;
