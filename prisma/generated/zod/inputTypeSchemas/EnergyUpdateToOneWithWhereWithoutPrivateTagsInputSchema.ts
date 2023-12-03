import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyWhereInputSchema } from './EnergyWhereInputSchema';
import { EnergyUpdateWithoutPrivateTagsInputSchema } from './EnergyUpdateWithoutPrivateTagsInputSchema';
import { EnergyUncheckedUpdateWithoutPrivateTagsInputSchema } from './EnergyUncheckedUpdateWithoutPrivateTagsInputSchema';

export const EnergyUpdateToOneWithWhereWithoutPrivateTagsInputSchema: z.ZodType<Prisma.EnergyUpdateToOneWithWhereWithoutPrivateTagsInput> = z.object({
  where: z.lazy(() => EnergyWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => EnergyUpdateWithoutPrivateTagsInputSchema),z.lazy(() => EnergyUncheckedUpdateWithoutPrivateTagsInputSchema) ]),
}).strict();

export default EnergyUpdateToOneWithWhereWithoutPrivateTagsInputSchema;
