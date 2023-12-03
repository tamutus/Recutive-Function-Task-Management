import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyWhereUniqueInputSchema } from './EnergyWhereUniqueInputSchema';
import { EnergyCreateWithoutPrivateTagsInputSchema } from './EnergyCreateWithoutPrivateTagsInputSchema';
import { EnergyUncheckedCreateWithoutPrivateTagsInputSchema } from './EnergyUncheckedCreateWithoutPrivateTagsInputSchema';

export const EnergyCreateOrConnectWithoutPrivateTagsInputSchema: z.ZodType<Prisma.EnergyCreateOrConnectWithoutPrivateTagsInput> = z.object({
  where: z.lazy(() => EnergyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EnergyCreateWithoutPrivateTagsInputSchema),z.lazy(() => EnergyUncheckedCreateWithoutPrivateTagsInputSchema) ]),
}).strict();

export default EnergyCreateOrConnectWithoutPrivateTagsInputSchema;
