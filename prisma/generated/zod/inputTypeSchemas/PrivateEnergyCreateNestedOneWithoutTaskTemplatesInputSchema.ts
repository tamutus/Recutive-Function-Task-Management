import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyCreateWithoutTaskTemplatesInputSchema } from './PrivateEnergyCreateWithoutTaskTemplatesInputSchema';
import { PrivateEnergyUncheckedCreateWithoutTaskTemplatesInputSchema } from './PrivateEnergyUncheckedCreateWithoutTaskTemplatesInputSchema';
import { PrivateEnergyCreateOrConnectWithoutTaskTemplatesInputSchema } from './PrivateEnergyCreateOrConnectWithoutTaskTemplatesInputSchema';
import { PrivateEnergyWhereUniqueInputSchema } from './PrivateEnergyWhereUniqueInputSchema';

export const PrivateEnergyCreateNestedOneWithoutTaskTemplatesInputSchema: z.ZodType<Prisma.PrivateEnergyCreateNestedOneWithoutTaskTemplatesInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergyCreateWithoutTaskTemplatesInputSchema),z.lazy(() => PrivateEnergyUncheckedCreateWithoutTaskTemplatesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PrivateEnergyCreateOrConnectWithoutTaskTemplatesInputSchema).optional(),
  connect: z.lazy(() => PrivateEnergyWhereUniqueInputSchema).optional()
}).strict();

export default PrivateEnergyCreateNestedOneWithoutTaskTemplatesInputSchema;
