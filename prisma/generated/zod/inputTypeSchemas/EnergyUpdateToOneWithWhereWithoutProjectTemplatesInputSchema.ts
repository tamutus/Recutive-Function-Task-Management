import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyWhereInputSchema } from './EnergyWhereInputSchema';
import { EnergyUpdateWithoutProjectTemplatesInputSchema } from './EnergyUpdateWithoutProjectTemplatesInputSchema';
import { EnergyUncheckedUpdateWithoutProjectTemplatesInputSchema } from './EnergyUncheckedUpdateWithoutProjectTemplatesInputSchema';

export const EnergyUpdateToOneWithWhereWithoutProjectTemplatesInputSchema: z.ZodType<Prisma.EnergyUpdateToOneWithWhereWithoutProjectTemplatesInput> = z.object({
  where: z.lazy(() => EnergyWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => EnergyUpdateWithoutProjectTemplatesInputSchema),z.lazy(() => EnergyUncheckedUpdateWithoutProjectTemplatesInputSchema) ]),
}).strict();

export default EnergyUpdateToOneWithWhereWithoutProjectTemplatesInputSchema;
