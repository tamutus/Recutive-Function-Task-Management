import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyCreateWithoutTasksInputSchema } from './EnergyCreateWithoutTasksInputSchema';
import { EnergyUncheckedCreateWithoutTasksInputSchema } from './EnergyUncheckedCreateWithoutTasksInputSchema';
import { EnergyCreateOrConnectWithoutTasksInputSchema } from './EnergyCreateOrConnectWithoutTasksInputSchema';
import { EnergyWhereUniqueInputSchema } from './EnergyWhereUniqueInputSchema';

export const EnergyCreateNestedOneWithoutTasksInputSchema: z.ZodType<Prisma.EnergyCreateNestedOneWithoutTasksInput> = z.object({
  create: z.union([ z.lazy(() => EnergyCreateWithoutTasksInputSchema),z.lazy(() => EnergyUncheckedCreateWithoutTasksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EnergyCreateOrConnectWithoutTasksInputSchema).optional(),
  connect: z.lazy(() => EnergyWhereUniqueInputSchema).optional()
}).strict();

export default EnergyCreateNestedOneWithoutTasksInputSchema;
