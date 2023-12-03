import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyWhereInputSchema } from './PrivateEnergyWhereInputSchema';
import { PrivateEnergyUpdateWithoutProjectTemplatesInputSchema } from './PrivateEnergyUpdateWithoutProjectTemplatesInputSchema';
import { PrivateEnergyUncheckedUpdateWithoutProjectTemplatesInputSchema } from './PrivateEnergyUncheckedUpdateWithoutProjectTemplatesInputSchema';

export const PrivateEnergyUpdateToOneWithWhereWithoutProjectTemplatesInputSchema: z.ZodType<Prisma.PrivateEnergyUpdateToOneWithWhereWithoutProjectTemplatesInput> = z.object({
  where: z.lazy(() => PrivateEnergyWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PrivateEnergyUpdateWithoutProjectTemplatesInputSchema),z.lazy(() => PrivateEnergyUncheckedUpdateWithoutProjectTemplatesInputSchema) ]),
}).strict();

export default PrivateEnergyUpdateToOneWithWhereWithoutProjectTemplatesInputSchema;
