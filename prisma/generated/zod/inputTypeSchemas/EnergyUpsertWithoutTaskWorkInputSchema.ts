import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyUpdateWithoutTaskWorkInputSchema } from './EnergyUpdateWithoutTaskWorkInputSchema';
import { EnergyUncheckedUpdateWithoutTaskWorkInputSchema } from './EnergyUncheckedUpdateWithoutTaskWorkInputSchema';
import { EnergyCreateWithoutTaskWorkInputSchema } from './EnergyCreateWithoutTaskWorkInputSchema';
import { EnergyUncheckedCreateWithoutTaskWorkInputSchema } from './EnergyUncheckedCreateWithoutTaskWorkInputSchema';
import { EnergyWhereInputSchema } from './EnergyWhereInputSchema';

export const EnergyUpsertWithoutTaskWorkInputSchema: z.ZodType<Prisma.EnergyUpsertWithoutTaskWorkInput> = z.object({
  update: z.union([ z.lazy(() => EnergyUpdateWithoutTaskWorkInputSchema),z.lazy(() => EnergyUncheckedUpdateWithoutTaskWorkInputSchema) ]),
  create: z.union([ z.lazy(() => EnergyCreateWithoutTaskWorkInputSchema),z.lazy(() => EnergyUncheckedCreateWithoutTaskWorkInputSchema) ]),
  where: z.lazy(() => EnergyWhereInputSchema).optional()
}).strict();

export default EnergyUpsertWithoutTaskWorkInputSchema;
