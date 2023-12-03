import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyUpdateWithoutTasksInputSchema } from './EnergyUpdateWithoutTasksInputSchema';
import { EnergyUncheckedUpdateWithoutTasksInputSchema } from './EnergyUncheckedUpdateWithoutTasksInputSchema';
import { EnergyCreateWithoutTasksInputSchema } from './EnergyCreateWithoutTasksInputSchema';
import { EnergyUncheckedCreateWithoutTasksInputSchema } from './EnergyUncheckedCreateWithoutTasksInputSchema';
import { EnergyWhereInputSchema } from './EnergyWhereInputSchema';

export const EnergyUpsertWithoutTasksInputSchema: z.ZodType<Prisma.EnergyUpsertWithoutTasksInput> = z.object({
  update: z.union([ z.lazy(() => EnergyUpdateWithoutTasksInputSchema),z.lazy(() => EnergyUncheckedUpdateWithoutTasksInputSchema) ]),
  create: z.union([ z.lazy(() => EnergyCreateWithoutTasksInputSchema),z.lazy(() => EnergyUncheckedCreateWithoutTasksInputSchema) ]),
  where: z.lazy(() => EnergyWhereInputSchema).optional()
}).strict();

export default EnergyUpsertWithoutTasksInputSchema;
