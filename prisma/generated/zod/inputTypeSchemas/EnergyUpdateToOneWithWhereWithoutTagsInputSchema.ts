import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyWhereInputSchema } from './EnergyWhereInputSchema';
import { EnergyUpdateWithoutTagsInputSchema } from './EnergyUpdateWithoutTagsInputSchema';
import { EnergyUncheckedUpdateWithoutTagsInputSchema } from './EnergyUncheckedUpdateWithoutTagsInputSchema';

export const EnergyUpdateToOneWithWhereWithoutTagsInputSchema: z.ZodType<Prisma.EnergyUpdateToOneWithWhereWithoutTagsInput> = z.object({
  where: z.lazy(() => EnergyWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => EnergyUpdateWithoutTagsInputSchema),z.lazy(() => EnergyUncheckedUpdateWithoutTagsInputSchema) ]),
}).strict();

export default EnergyUpdateToOneWithWhereWithoutTagsInputSchema;
