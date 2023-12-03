import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyUpdateWithoutTaskWorkInputSchema } from './PrivateEnergyUpdateWithoutTaskWorkInputSchema';
import { PrivateEnergyUncheckedUpdateWithoutTaskWorkInputSchema } from './PrivateEnergyUncheckedUpdateWithoutTaskWorkInputSchema';
import { PrivateEnergyCreateWithoutTaskWorkInputSchema } from './PrivateEnergyCreateWithoutTaskWorkInputSchema';
import { PrivateEnergyUncheckedCreateWithoutTaskWorkInputSchema } from './PrivateEnergyUncheckedCreateWithoutTaskWorkInputSchema';
import { PrivateEnergyWhereInputSchema } from './PrivateEnergyWhereInputSchema';

export const PrivateEnergyUpsertWithoutTaskWorkInputSchema: z.ZodType<Prisma.PrivateEnergyUpsertWithoutTaskWorkInput> = z.object({
  update: z.union([ z.lazy(() => PrivateEnergyUpdateWithoutTaskWorkInputSchema),z.lazy(() => PrivateEnergyUncheckedUpdateWithoutTaskWorkInputSchema) ]),
  create: z.union([ z.lazy(() => PrivateEnergyCreateWithoutTaskWorkInputSchema),z.lazy(() => PrivateEnergyUncheckedCreateWithoutTaskWorkInputSchema) ]),
  where: z.lazy(() => PrivateEnergyWhereInputSchema).optional()
}).strict();

export default PrivateEnergyUpsertWithoutTaskWorkInputSchema;
