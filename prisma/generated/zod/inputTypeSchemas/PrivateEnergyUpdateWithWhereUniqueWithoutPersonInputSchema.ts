import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyWhereUniqueInputSchema } from './PrivateEnergyWhereUniqueInputSchema';
import { PrivateEnergyUpdateWithoutPersonInputSchema } from './PrivateEnergyUpdateWithoutPersonInputSchema';
import { PrivateEnergyUncheckedUpdateWithoutPersonInputSchema } from './PrivateEnergyUncheckedUpdateWithoutPersonInputSchema';

export const PrivateEnergyUpdateWithWhereUniqueWithoutPersonInputSchema: z.ZodType<Prisma.PrivateEnergyUpdateWithWhereUniqueWithoutPersonInput> = z.object({
  where: z.lazy(() => PrivateEnergyWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PrivateEnergyUpdateWithoutPersonInputSchema),z.lazy(() => PrivateEnergyUncheckedUpdateWithoutPersonInputSchema) ]),
}).strict();

export default PrivateEnergyUpdateWithWhereUniqueWithoutPersonInputSchema;
