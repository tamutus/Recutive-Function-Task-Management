import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyWhereUniqueInputSchema } from './EnergyWhereUniqueInputSchema';
import { EnergyCreateWithoutTagsInputSchema } from './EnergyCreateWithoutTagsInputSchema';
import { EnergyUncheckedCreateWithoutTagsInputSchema } from './EnergyUncheckedCreateWithoutTagsInputSchema';

export const EnergyCreateOrConnectWithoutTagsInputSchema: z.ZodType<Prisma.EnergyCreateOrConnectWithoutTagsInput> = z.object({
  where: z.lazy(() => EnergyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EnergyCreateWithoutTagsInputSchema),z.lazy(() => EnergyUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();

export default EnergyCreateOrConnectWithoutTagsInputSchema;
