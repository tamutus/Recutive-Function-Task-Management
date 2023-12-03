import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyCreateWithoutTagsInputSchema } from './PrivateEnergyCreateWithoutTagsInputSchema';
import { PrivateEnergyUncheckedCreateWithoutTagsInputSchema } from './PrivateEnergyUncheckedCreateWithoutTagsInputSchema';
import { PrivateEnergyCreateOrConnectWithoutTagsInputSchema } from './PrivateEnergyCreateOrConnectWithoutTagsInputSchema';
import { PrivateEnergyWhereUniqueInputSchema } from './PrivateEnergyWhereUniqueInputSchema';

export const PrivateEnergyCreateNestedOneWithoutTagsInputSchema: z.ZodType<Prisma.PrivateEnergyCreateNestedOneWithoutTagsInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergyCreateWithoutTagsInputSchema),z.lazy(() => PrivateEnergyUncheckedCreateWithoutTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PrivateEnergyCreateOrConnectWithoutTagsInputSchema).optional(),
  connect: z.lazy(() => PrivateEnergyWhereUniqueInputSchema).optional()
}).strict();

export default PrivateEnergyCreateNestedOneWithoutTagsInputSchema;
