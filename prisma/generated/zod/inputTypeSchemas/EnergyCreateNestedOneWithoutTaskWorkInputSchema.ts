import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyCreateWithoutTaskWorkInputSchema } from './EnergyCreateWithoutTaskWorkInputSchema';
import { EnergyUncheckedCreateWithoutTaskWorkInputSchema } from './EnergyUncheckedCreateWithoutTaskWorkInputSchema';
import { EnergyCreateOrConnectWithoutTaskWorkInputSchema } from './EnergyCreateOrConnectWithoutTaskWorkInputSchema';
import { EnergyWhereUniqueInputSchema } from './EnergyWhereUniqueInputSchema';

export const EnergyCreateNestedOneWithoutTaskWorkInputSchema: z.ZodType<Prisma.EnergyCreateNestedOneWithoutTaskWorkInput> = z.object({
  create: z.union([ z.lazy(() => EnergyCreateWithoutTaskWorkInputSchema),z.lazy(() => EnergyUncheckedCreateWithoutTaskWorkInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EnergyCreateOrConnectWithoutTaskWorkInputSchema).optional(),
  connect: z.lazy(() => EnergyWhereUniqueInputSchema).optional()
}).strict();

export default EnergyCreateNestedOneWithoutTaskWorkInputSchema;
