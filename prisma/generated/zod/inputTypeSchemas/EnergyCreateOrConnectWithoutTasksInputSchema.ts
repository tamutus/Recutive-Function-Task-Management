import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyWhereUniqueInputSchema } from './EnergyWhereUniqueInputSchema';
import { EnergyCreateWithoutTasksInputSchema } from './EnergyCreateWithoutTasksInputSchema';
import { EnergyUncheckedCreateWithoutTasksInputSchema } from './EnergyUncheckedCreateWithoutTasksInputSchema';

export const EnergyCreateOrConnectWithoutTasksInputSchema: z.ZodType<Prisma.EnergyCreateOrConnectWithoutTasksInput> = z.object({
  where: z.lazy(() => EnergyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EnergyCreateWithoutTasksInputSchema),z.lazy(() => EnergyUncheckedCreateWithoutTasksInputSchema) ]),
}).strict();

export default EnergyCreateOrConnectWithoutTasksInputSchema;
