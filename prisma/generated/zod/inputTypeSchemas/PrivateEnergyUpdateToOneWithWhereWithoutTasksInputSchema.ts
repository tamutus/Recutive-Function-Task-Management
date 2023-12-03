import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyWhereInputSchema } from './PrivateEnergyWhereInputSchema';
import { PrivateEnergyUpdateWithoutTasksInputSchema } from './PrivateEnergyUpdateWithoutTasksInputSchema';
import { PrivateEnergyUncheckedUpdateWithoutTasksInputSchema } from './PrivateEnergyUncheckedUpdateWithoutTasksInputSchema';

export const PrivateEnergyUpdateToOneWithWhereWithoutTasksInputSchema: z.ZodType<Prisma.PrivateEnergyUpdateToOneWithWhereWithoutTasksInput> = z.object({
  where: z.lazy(() => PrivateEnergyWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PrivateEnergyUpdateWithoutTasksInputSchema),z.lazy(() => PrivateEnergyUncheckedUpdateWithoutTasksInputSchema) ]),
}).strict();

export default PrivateEnergyUpdateToOneWithWhereWithoutTasksInputSchema;
