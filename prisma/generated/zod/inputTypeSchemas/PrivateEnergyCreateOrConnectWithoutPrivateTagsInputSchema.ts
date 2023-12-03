import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyWhereUniqueInputSchema } from './PrivateEnergyWhereUniqueInputSchema';
import { PrivateEnergyCreateWithoutPrivateTagsInputSchema } from './PrivateEnergyCreateWithoutPrivateTagsInputSchema';
import { PrivateEnergyUncheckedCreateWithoutPrivateTagsInputSchema } from './PrivateEnergyUncheckedCreateWithoutPrivateTagsInputSchema';

export const PrivateEnergyCreateOrConnectWithoutPrivateTagsInputSchema: z.ZodType<Prisma.PrivateEnergyCreateOrConnectWithoutPrivateTagsInput> = z.object({
  where: z.lazy(() => PrivateEnergyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrivateEnergyCreateWithoutPrivateTagsInputSchema),z.lazy(() => PrivateEnergyUncheckedCreateWithoutPrivateTagsInputSchema) ]),
}).strict();

export default PrivateEnergyCreateOrConnectWithoutPrivateTagsInputSchema;
