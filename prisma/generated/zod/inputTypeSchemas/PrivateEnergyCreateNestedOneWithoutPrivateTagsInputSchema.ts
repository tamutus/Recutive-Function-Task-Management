import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyCreateWithoutPrivateTagsInputSchema } from './PrivateEnergyCreateWithoutPrivateTagsInputSchema';
import { PrivateEnergyUncheckedCreateWithoutPrivateTagsInputSchema } from './PrivateEnergyUncheckedCreateWithoutPrivateTagsInputSchema';
import { PrivateEnergyCreateOrConnectWithoutPrivateTagsInputSchema } from './PrivateEnergyCreateOrConnectWithoutPrivateTagsInputSchema';
import { PrivateEnergyWhereUniqueInputSchema } from './PrivateEnergyWhereUniqueInputSchema';

export const PrivateEnergyCreateNestedOneWithoutPrivateTagsInputSchema: z.ZodType<Prisma.PrivateEnergyCreateNestedOneWithoutPrivateTagsInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergyCreateWithoutPrivateTagsInputSchema),z.lazy(() => PrivateEnergyUncheckedCreateWithoutPrivateTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PrivateEnergyCreateOrConnectWithoutPrivateTagsInputSchema).optional(),
  connect: z.lazy(() => PrivateEnergyWhereUniqueInputSchema).optional()
}).strict();

export default PrivateEnergyCreateNestedOneWithoutPrivateTagsInputSchema;
