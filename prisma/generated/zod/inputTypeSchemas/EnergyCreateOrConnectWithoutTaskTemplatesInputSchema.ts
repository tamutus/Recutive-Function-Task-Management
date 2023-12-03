import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyWhereUniqueInputSchema } from './EnergyWhereUniqueInputSchema';
import { EnergyCreateWithoutTaskTemplatesInputSchema } from './EnergyCreateWithoutTaskTemplatesInputSchema';
import { EnergyUncheckedCreateWithoutTaskTemplatesInputSchema } from './EnergyUncheckedCreateWithoutTaskTemplatesInputSchema';

export const EnergyCreateOrConnectWithoutTaskTemplatesInputSchema: z.ZodType<Prisma.EnergyCreateOrConnectWithoutTaskTemplatesInput> = z.object({
  where: z.lazy(() => EnergyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EnergyCreateWithoutTaskTemplatesInputSchema),z.lazy(() => EnergyUncheckedCreateWithoutTaskTemplatesInputSchema) ]),
}).strict();

export default EnergyCreateOrConnectWithoutTaskTemplatesInputSchema;
