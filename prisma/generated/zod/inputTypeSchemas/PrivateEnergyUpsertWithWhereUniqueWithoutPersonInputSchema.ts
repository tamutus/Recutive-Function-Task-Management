import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyWhereUniqueInputSchema } from './PrivateEnergyWhereUniqueInputSchema';
import { PrivateEnergyUpdateWithoutPersonInputSchema } from './PrivateEnergyUpdateWithoutPersonInputSchema';
import { PrivateEnergyUncheckedUpdateWithoutPersonInputSchema } from './PrivateEnergyUncheckedUpdateWithoutPersonInputSchema';
import { PrivateEnergyCreateWithoutPersonInputSchema } from './PrivateEnergyCreateWithoutPersonInputSchema';
import { PrivateEnergyUncheckedCreateWithoutPersonInputSchema } from './PrivateEnergyUncheckedCreateWithoutPersonInputSchema';

export const PrivateEnergyUpsertWithWhereUniqueWithoutPersonInputSchema: z.ZodType<Prisma.PrivateEnergyUpsertWithWhereUniqueWithoutPersonInput> = z.object({
  where: z.lazy(() => PrivateEnergyWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PrivateEnergyUpdateWithoutPersonInputSchema),z.lazy(() => PrivateEnergyUncheckedUpdateWithoutPersonInputSchema) ]),
  create: z.union([ z.lazy(() => PrivateEnergyCreateWithoutPersonInputSchema),z.lazy(() => PrivateEnergyUncheckedCreateWithoutPersonInputSchema) ]),
}).strict();

export default PrivateEnergyUpsertWithWhereUniqueWithoutPersonInputSchema;
