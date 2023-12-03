import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyCreateWithoutPrivateTagsInputSchema } from './EnergyCreateWithoutPrivateTagsInputSchema';
import { EnergyUncheckedCreateWithoutPrivateTagsInputSchema } from './EnergyUncheckedCreateWithoutPrivateTagsInputSchema';
import { EnergyCreateOrConnectWithoutPrivateTagsInputSchema } from './EnergyCreateOrConnectWithoutPrivateTagsInputSchema';
import { EnergyWhereUniqueInputSchema } from './EnergyWhereUniqueInputSchema';

export const EnergyCreateNestedOneWithoutPrivateTagsInputSchema: z.ZodType<Prisma.EnergyCreateNestedOneWithoutPrivateTagsInput> = z.object({
  create: z.union([ z.lazy(() => EnergyCreateWithoutPrivateTagsInputSchema),z.lazy(() => EnergyUncheckedCreateWithoutPrivateTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EnergyCreateOrConnectWithoutPrivateTagsInputSchema).optional(),
  connect: z.lazy(() => EnergyWhereUniqueInputSchema).optional()
}).strict();

export default EnergyCreateNestedOneWithoutPrivateTagsInputSchema;
