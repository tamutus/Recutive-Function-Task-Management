import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyCreateWithoutTagsInputSchema } from './EnergyCreateWithoutTagsInputSchema';
import { EnergyUncheckedCreateWithoutTagsInputSchema } from './EnergyUncheckedCreateWithoutTagsInputSchema';
import { EnergyCreateOrConnectWithoutTagsInputSchema } from './EnergyCreateOrConnectWithoutTagsInputSchema';
import { EnergyWhereUniqueInputSchema } from './EnergyWhereUniqueInputSchema';

export const EnergyCreateNestedOneWithoutTagsInputSchema: z.ZodType<Prisma.EnergyCreateNestedOneWithoutTagsInput> = z.object({
  create: z.union([ z.lazy(() => EnergyCreateWithoutTagsInputSchema),z.lazy(() => EnergyUncheckedCreateWithoutTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EnergyCreateOrConnectWithoutTagsInputSchema).optional(),
  connect: z.lazy(() => EnergyWhereUniqueInputSchema).optional()
}).strict();

export default EnergyCreateNestedOneWithoutTagsInputSchema;
