import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyWhereUniqueInputSchema } from './PrivateEnergyWhereUniqueInputSchema';
import { PrivateEnergyCreateWithoutTagsInputSchema } from './PrivateEnergyCreateWithoutTagsInputSchema';
import { PrivateEnergyUncheckedCreateWithoutTagsInputSchema } from './PrivateEnergyUncheckedCreateWithoutTagsInputSchema';

export const PrivateEnergyCreateOrConnectWithoutTagsInputSchema: z.ZodType<Prisma.PrivateEnergyCreateOrConnectWithoutTagsInput> = z.object({
  where: z.lazy(() => PrivateEnergyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrivateEnergyCreateWithoutTagsInputSchema),z.lazy(() => PrivateEnergyUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();

export default PrivateEnergyCreateOrConnectWithoutTagsInputSchema;
