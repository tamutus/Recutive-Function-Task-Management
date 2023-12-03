import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyWhereUniqueInputSchema } from './EnergyWhereUniqueInputSchema';
import { EnergyCreateWithoutProjectsInputSchema } from './EnergyCreateWithoutProjectsInputSchema';
import { EnergyUncheckedCreateWithoutProjectsInputSchema } from './EnergyUncheckedCreateWithoutProjectsInputSchema';

export const EnergyCreateOrConnectWithoutProjectsInputSchema: z.ZodType<Prisma.EnergyCreateOrConnectWithoutProjectsInput> = z.object({
  where: z.lazy(() => EnergyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EnergyCreateWithoutProjectsInputSchema),z.lazy(() => EnergyUncheckedCreateWithoutProjectsInputSchema) ]),
}).strict();

export default EnergyCreateOrConnectWithoutProjectsInputSchema;
