import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyWhereUniqueInputSchema } from './EnergyWhereUniqueInputSchema';
import { EnergyCreateWithoutTaskWorkInputSchema } from './EnergyCreateWithoutTaskWorkInputSchema';
import { EnergyUncheckedCreateWithoutTaskWorkInputSchema } from './EnergyUncheckedCreateWithoutTaskWorkInputSchema';

export const EnergyCreateOrConnectWithoutTaskWorkInputSchema: z.ZodType<Prisma.EnergyCreateOrConnectWithoutTaskWorkInput> = z.object({
  where: z.lazy(() => EnergyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EnergyCreateWithoutTaskWorkInputSchema),z.lazy(() => EnergyUncheckedCreateWithoutTaskWorkInputSchema) ]),
}).strict();

export default EnergyCreateOrConnectWithoutTaskWorkInputSchema;
