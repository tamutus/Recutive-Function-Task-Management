import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyUpdateWithoutTasksInputSchema } from './PrivateEnergyUpdateWithoutTasksInputSchema';
import { PrivateEnergyUncheckedUpdateWithoutTasksInputSchema } from './PrivateEnergyUncheckedUpdateWithoutTasksInputSchema';
import { PrivateEnergyCreateWithoutTasksInputSchema } from './PrivateEnergyCreateWithoutTasksInputSchema';
import { PrivateEnergyUncheckedCreateWithoutTasksInputSchema } from './PrivateEnergyUncheckedCreateWithoutTasksInputSchema';
import { PrivateEnergyWhereInputSchema } from './PrivateEnergyWhereInputSchema';

export const PrivateEnergyUpsertWithoutTasksInputSchema: z.ZodType<Prisma.PrivateEnergyUpsertWithoutTasksInput> = z.object({
  update: z.union([ z.lazy(() => PrivateEnergyUpdateWithoutTasksInputSchema),z.lazy(() => PrivateEnergyUncheckedUpdateWithoutTasksInputSchema) ]),
  create: z.union([ z.lazy(() => PrivateEnergyCreateWithoutTasksInputSchema),z.lazy(() => PrivateEnergyUncheckedCreateWithoutTasksInputSchema) ]),
  where: z.lazy(() => PrivateEnergyWhereInputSchema).optional()
}).strict();

export default PrivateEnergyUpsertWithoutTasksInputSchema;
