import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyWhereUniqueInputSchema } from './EnergyWhereUniqueInputSchema';
import { EnergyCreateWithoutProjectTemplatesInputSchema } from './EnergyCreateWithoutProjectTemplatesInputSchema';
import { EnergyUncheckedCreateWithoutProjectTemplatesInputSchema } from './EnergyUncheckedCreateWithoutProjectTemplatesInputSchema';

export const EnergyCreateOrConnectWithoutProjectTemplatesInputSchema: z.ZodType<Prisma.EnergyCreateOrConnectWithoutProjectTemplatesInput> = z.object({
  where: z.lazy(() => EnergyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EnergyCreateWithoutProjectTemplatesInputSchema),z.lazy(() => EnergyUncheckedCreateWithoutProjectTemplatesInputSchema) ]),
}).strict();

export default EnergyCreateOrConnectWithoutProjectTemplatesInputSchema;
