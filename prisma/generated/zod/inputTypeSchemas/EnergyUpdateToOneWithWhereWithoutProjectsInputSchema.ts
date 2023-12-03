import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyWhereInputSchema } from './EnergyWhereInputSchema';
import { EnergyUpdateWithoutProjectsInputSchema } from './EnergyUpdateWithoutProjectsInputSchema';
import { EnergyUncheckedUpdateWithoutProjectsInputSchema } from './EnergyUncheckedUpdateWithoutProjectsInputSchema';

export const EnergyUpdateToOneWithWhereWithoutProjectsInputSchema: z.ZodType<Prisma.EnergyUpdateToOneWithWhereWithoutProjectsInput> = z.object({
  where: z.lazy(() => EnergyWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => EnergyUpdateWithoutProjectsInputSchema),z.lazy(() => EnergyUncheckedUpdateWithoutProjectsInputSchema) ]),
}).strict();

export default EnergyUpdateToOneWithWhereWithoutProjectsInputSchema;
