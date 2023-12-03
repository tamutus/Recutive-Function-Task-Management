import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyWhereInputSchema } from './EnergyWhereInputSchema';
import { EnergyUpdateWithoutTasksInputSchema } from './EnergyUpdateWithoutTasksInputSchema';
import { EnergyUncheckedUpdateWithoutTasksInputSchema } from './EnergyUncheckedUpdateWithoutTasksInputSchema';

export const EnergyUpdateToOneWithWhereWithoutTasksInputSchema: z.ZodType<Prisma.EnergyUpdateToOneWithWhereWithoutTasksInput> = z.object({
  where: z.lazy(() => EnergyWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => EnergyUpdateWithoutTasksInputSchema),z.lazy(() => EnergyUncheckedUpdateWithoutTasksInputSchema) ]),
}).strict();

export default EnergyUpdateToOneWithWhereWithoutTasksInputSchema;
