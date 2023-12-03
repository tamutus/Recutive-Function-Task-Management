import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyWhereInputSchema } from './EnergyWhereInputSchema';
import { EnergyUpdateWithoutTaskWorkInputSchema } from './EnergyUpdateWithoutTaskWorkInputSchema';
import { EnergyUncheckedUpdateWithoutTaskWorkInputSchema } from './EnergyUncheckedUpdateWithoutTaskWorkInputSchema';

export const EnergyUpdateToOneWithWhereWithoutTaskWorkInputSchema: z.ZodType<Prisma.EnergyUpdateToOneWithWhereWithoutTaskWorkInput> = z.object({
  where: z.lazy(() => EnergyWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => EnergyUpdateWithoutTaskWorkInputSchema),z.lazy(() => EnergyUncheckedUpdateWithoutTaskWorkInputSchema) ]),
}).strict();

export default EnergyUpdateToOneWithWhereWithoutTaskWorkInputSchema;
