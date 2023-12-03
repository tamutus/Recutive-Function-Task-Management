import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyWhereInputSchema } from './PrivateEnergyWhereInputSchema';
import { PrivateEnergyUpdateWithoutProjectsInputSchema } from './PrivateEnergyUpdateWithoutProjectsInputSchema';
import { PrivateEnergyUncheckedUpdateWithoutProjectsInputSchema } from './PrivateEnergyUncheckedUpdateWithoutProjectsInputSchema';

export const PrivateEnergyUpdateToOneWithWhereWithoutProjectsInputSchema: z.ZodType<Prisma.PrivateEnergyUpdateToOneWithWhereWithoutProjectsInput> = z.object({
  where: z.lazy(() => PrivateEnergyWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PrivateEnergyUpdateWithoutProjectsInputSchema),z.lazy(() => PrivateEnergyUncheckedUpdateWithoutProjectsInputSchema) ]),
}).strict();

export default PrivateEnergyUpdateToOneWithWhereWithoutProjectsInputSchema;
