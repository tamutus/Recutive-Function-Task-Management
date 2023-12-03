import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyCreateWithoutTaskTemplatesInputSchema } from './EnergyCreateWithoutTaskTemplatesInputSchema';
import { EnergyUncheckedCreateWithoutTaskTemplatesInputSchema } from './EnergyUncheckedCreateWithoutTaskTemplatesInputSchema';
import { EnergyCreateOrConnectWithoutTaskTemplatesInputSchema } from './EnergyCreateOrConnectWithoutTaskTemplatesInputSchema';
import { EnergyWhereUniqueInputSchema } from './EnergyWhereUniqueInputSchema';

export const EnergyCreateNestedOneWithoutTaskTemplatesInputSchema: z.ZodType<Prisma.EnergyCreateNestedOneWithoutTaskTemplatesInput> = z.object({
  create: z.union([ z.lazy(() => EnergyCreateWithoutTaskTemplatesInputSchema),z.lazy(() => EnergyUncheckedCreateWithoutTaskTemplatesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EnergyCreateOrConnectWithoutTaskTemplatesInputSchema).optional(),
  connect: z.lazy(() => EnergyWhereUniqueInputSchema).optional()
}).strict();

export default EnergyCreateNestedOneWithoutTaskTemplatesInputSchema;
