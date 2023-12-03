import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyUpdateWithoutProjectsInputSchema } from './PrivateEnergyUpdateWithoutProjectsInputSchema';
import { PrivateEnergyUncheckedUpdateWithoutProjectsInputSchema } from './PrivateEnergyUncheckedUpdateWithoutProjectsInputSchema';
import { PrivateEnergyCreateWithoutProjectsInputSchema } from './PrivateEnergyCreateWithoutProjectsInputSchema';
import { PrivateEnergyUncheckedCreateWithoutProjectsInputSchema } from './PrivateEnergyUncheckedCreateWithoutProjectsInputSchema';
import { PrivateEnergyWhereInputSchema } from './PrivateEnergyWhereInputSchema';

export const PrivateEnergyUpsertWithoutProjectsInputSchema: z.ZodType<Prisma.PrivateEnergyUpsertWithoutProjectsInput> = z.object({
  update: z.union([ z.lazy(() => PrivateEnergyUpdateWithoutProjectsInputSchema),z.lazy(() => PrivateEnergyUncheckedUpdateWithoutProjectsInputSchema) ]),
  create: z.union([ z.lazy(() => PrivateEnergyCreateWithoutProjectsInputSchema),z.lazy(() => PrivateEnergyUncheckedCreateWithoutProjectsInputSchema) ]),
  where: z.lazy(() => PrivateEnergyWhereInputSchema).optional()
}).strict();

export default PrivateEnergyUpsertWithoutProjectsInputSchema;
