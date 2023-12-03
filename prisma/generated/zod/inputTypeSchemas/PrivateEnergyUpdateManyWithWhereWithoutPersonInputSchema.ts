import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyScalarWhereInputSchema } from './PrivateEnergyScalarWhereInputSchema';
import { PrivateEnergyUpdateManyMutationInputSchema } from './PrivateEnergyUpdateManyMutationInputSchema';
import { PrivateEnergyUncheckedUpdateManyWithoutPersonInputSchema } from './PrivateEnergyUncheckedUpdateManyWithoutPersonInputSchema';

export const PrivateEnergyUpdateManyWithWhereWithoutPersonInputSchema: z.ZodType<Prisma.PrivateEnergyUpdateManyWithWhereWithoutPersonInput> = z.object({
  where: z.lazy(() => PrivateEnergyScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PrivateEnergyUpdateManyMutationInputSchema),z.lazy(() => PrivateEnergyUncheckedUpdateManyWithoutPersonInputSchema) ]),
}).strict();

export default PrivateEnergyUpdateManyWithWhereWithoutPersonInputSchema;
