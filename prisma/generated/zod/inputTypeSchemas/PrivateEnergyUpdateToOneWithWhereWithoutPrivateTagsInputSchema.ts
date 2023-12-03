import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyWhereInputSchema } from './PrivateEnergyWhereInputSchema';
import { PrivateEnergyUpdateWithoutPrivateTagsInputSchema } from './PrivateEnergyUpdateWithoutPrivateTagsInputSchema';
import { PrivateEnergyUncheckedUpdateWithoutPrivateTagsInputSchema } from './PrivateEnergyUncheckedUpdateWithoutPrivateTagsInputSchema';

export const PrivateEnergyUpdateToOneWithWhereWithoutPrivateTagsInputSchema: z.ZodType<Prisma.PrivateEnergyUpdateToOneWithWhereWithoutPrivateTagsInput> = z.object({
  where: z.lazy(() => PrivateEnergyWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PrivateEnergyUpdateWithoutPrivateTagsInputSchema),z.lazy(() => PrivateEnergyUncheckedUpdateWithoutPrivateTagsInputSchema) ]),
}).strict();

export default PrivateEnergyUpdateToOneWithWhereWithoutPrivateTagsInputSchema;
