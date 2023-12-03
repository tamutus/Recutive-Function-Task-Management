import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyWhereInputSchema } from './PrivateEnergyWhereInputSchema';
import { PrivateEnergyUpdateWithoutTaskWorkInputSchema } from './PrivateEnergyUpdateWithoutTaskWorkInputSchema';
import { PrivateEnergyUncheckedUpdateWithoutTaskWorkInputSchema } from './PrivateEnergyUncheckedUpdateWithoutTaskWorkInputSchema';

export const PrivateEnergyUpdateToOneWithWhereWithoutTaskWorkInputSchema: z.ZodType<Prisma.PrivateEnergyUpdateToOneWithWhereWithoutTaskWorkInput> = z.object({
  where: z.lazy(() => PrivateEnergyWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PrivateEnergyUpdateWithoutTaskWorkInputSchema),z.lazy(() => PrivateEnergyUncheckedUpdateWithoutTaskWorkInputSchema) ]),
}).strict();

export default PrivateEnergyUpdateToOneWithWhereWithoutTaskWorkInputSchema;
