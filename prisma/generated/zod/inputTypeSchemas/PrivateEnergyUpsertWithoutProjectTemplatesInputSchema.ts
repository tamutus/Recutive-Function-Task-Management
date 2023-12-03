import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyUpdateWithoutProjectTemplatesInputSchema } from './PrivateEnergyUpdateWithoutProjectTemplatesInputSchema';
import { PrivateEnergyUncheckedUpdateWithoutProjectTemplatesInputSchema } from './PrivateEnergyUncheckedUpdateWithoutProjectTemplatesInputSchema';
import { PrivateEnergyCreateWithoutProjectTemplatesInputSchema } from './PrivateEnergyCreateWithoutProjectTemplatesInputSchema';
import { PrivateEnergyUncheckedCreateWithoutProjectTemplatesInputSchema } from './PrivateEnergyUncheckedCreateWithoutProjectTemplatesInputSchema';
import { PrivateEnergyWhereInputSchema } from './PrivateEnergyWhereInputSchema';

export const PrivateEnergyUpsertWithoutProjectTemplatesInputSchema: z.ZodType<Prisma.PrivateEnergyUpsertWithoutProjectTemplatesInput> = z.object({
  update: z.union([ z.lazy(() => PrivateEnergyUpdateWithoutProjectTemplatesInputSchema),z.lazy(() => PrivateEnergyUncheckedUpdateWithoutProjectTemplatesInputSchema) ]),
  create: z.union([ z.lazy(() => PrivateEnergyCreateWithoutProjectTemplatesInputSchema),z.lazy(() => PrivateEnergyUncheckedCreateWithoutProjectTemplatesInputSchema) ]),
  where: z.lazy(() => PrivateEnergyWhereInputSchema).optional()
}).strict();

export default PrivateEnergyUpsertWithoutProjectTemplatesInputSchema;
