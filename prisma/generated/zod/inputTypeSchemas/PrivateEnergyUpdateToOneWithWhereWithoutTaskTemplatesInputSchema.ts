import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyWhereInputSchema } from './PrivateEnergyWhereInputSchema';
import { PrivateEnergyUpdateWithoutTaskTemplatesInputSchema } from './PrivateEnergyUpdateWithoutTaskTemplatesInputSchema';
import { PrivateEnergyUncheckedUpdateWithoutTaskTemplatesInputSchema } from './PrivateEnergyUncheckedUpdateWithoutTaskTemplatesInputSchema';

export const PrivateEnergyUpdateToOneWithWhereWithoutTaskTemplatesInputSchema: z.ZodType<Prisma.PrivateEnergyUpdateToOneWithWhereWithoutTaskTemplatesInput> = z.object({
  where: z.lazy(() => PrivateEnergyWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PrivateEnergyUpdateWithoutTaskTemplatesInputSchema),z.lazy(() => PrivateEnergyUncheckedUpdateWithoutTaskTemplatesInputSchema) ]),
}).strict();

export default PrivateEnergyUpdateToOneWithWhereWithoutTaskTemplatesInputSchema;
