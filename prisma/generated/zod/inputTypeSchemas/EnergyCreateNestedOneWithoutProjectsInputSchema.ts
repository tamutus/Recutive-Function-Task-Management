import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyCreateWithoutProjectsInputSchema } from './EnergyCreateWithoutProjectsInputSchema';
import { EnergyUncheckedCreateWithoutProjectsInputSchema } from './EnergyUncheckedCreateWithoutProjectsInputSchema';
import { EnergyCreateOrConnectWithoutProjectsInputSchema } from './EnergyCreateOrConnectWithoutProjectsInputSchema';
import { EnergyWhereUniqueInputSchema } from './EnergyWhereUniqueInputSchema';

export const EnergyCreateNestedOneWithoutProjectsInputSchema: z.ZodType<Prisma.EnergyCreateNestedOneWithoutProjectsInput> = z.object({
  create: z.union([ z.lazy(() => EnergyCreateWithoutProjectsInputSchema),z.lazy(() => EnergyUncheckedCreateWithoutProjectsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EnergyCreateOrConnectWithoutProjectsInputSchema).optional(),
  connect: z.lazy(() => EnergyWhereUniqueInputSchema).optional()
}).strict();

export default EnergyCreateNestedOneWithoutProjectsInputSchema;
