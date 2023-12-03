import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyWhereInputSchema } from './EnergyWhereInputSchema';
import { EnergyUpdateWithoutTaskTemplatesInputSchema } from './EnergyUpdateWithoutTaskTemplatesInputSchema';
import { EnergyUncheckedUpdateWithoutTaskTemplatesInputSchema } from './EnergyUncheckedUpdateWithoutTaskTemplatesInputSchema';

export const EnergyUpdateToOneWithWhereWithoutTaskTemplatesInputSchema: z.ZodType<Prisma.EnergyUpdateToOneWithWhereWithoutTaskTemplatesInput> = z.object({
  where: z.lazy(() => EnergyWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => EnergyUpdateWithoutTaskTemplatesInputSchema),z.lazy(() => EnergyUncheckedUpdateWithoutTaskTemplatesInputSchema) ]),
}).strict();

export default EnergyUpdateToOneWithWhereWithoutTaskTemplatesInputSchema;
