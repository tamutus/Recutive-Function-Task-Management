import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyWhereInputSchema } from './PrivateEnergyWhereInputSchema';
import { PrivateEnergyUpdateWithoutTagsInputSchema } from './PrivateEnergyUpdateWithoutTagsInputSchema';
import { PrivateEnergyUncheckedUpdateWithoutTagsInputSchema } from './PrivateEnergyUncheckedUpdateWithoutTagsInputSchema';

export const PrivateEnergyUpdateToOneWithWhereWithoutTagsInputSchema: z.ZodType<Prisma.PrivateEnergyUpdateToOneWithWhereWithoutTagsInput> = z.object({
  where: z.lazy(() => PrivateEnergyWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PrivateEnergyUpdateWithoutTagsInputSchema),z.lazy(() => PrivateEnergyUncheckedUpdateWithoutTagsInputSchema) ]),
}).strict();

export default PrivateEnergyUpdateToOneWithWhereWithoutTagsInputSchema;
