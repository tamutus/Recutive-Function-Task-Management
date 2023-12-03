import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyWhereInputSchema } from './EnergyWhereInputSchema';
import { EnergyUpdateWithoutExperiencesInputSchema } from './EnergyUpdateWithoutExperiencesInputSchema';
import { EnergyUncheckedUpdateWithoutExperiencesInputSchema } from './EnergyUncheckedUpdateWithoutExperiencesInputSchema';

export const EnergyUpdateToOneWithWhereWithoutExperiencesInputSchema: z.ZodType<Prisma.EnergyUpdateToOneWithWhereWithoutExperiencesInput> = z.object({
  where: z.lazy(() => EnergyWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => EnergyUpdateWithoutExperiencesInputSchema),z.lazy(() => EnergyUncheckedUpdateWithoutExperiencesInputSchema) ]),
}).strict();

export default EnergyUpdateToOneWithWhereWithoutExperiencesInputSchema;
