import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyCreateWithoutProjectTemplatesInputSchema } from './EnergyCreateWithoutProjectTemplatesInputSchema';
import { EnergyUncheckedCreateWithoutProjectTemplatesInputSchema } from './EnergyUncheckedCreateWithoutProjectTemplatesInputSchema';
import { EnergyCreateOrConnectWithoutProjectTemplatesInputSchema } from './EnergyCreateOrConnectWithoutProjectTemplatesInputSchema';
import { EnergyWhereUniqueInputSchema } from './EnergyWhereUniqueInputSchema';

export const EnergyCreateNestedOneWithoutProjectTemplatesInputSchema: z.ZodType<Prisma.EnergyCreateNestedOneWithoutProjectTemplatesInput> = z.object({
  create: z.union([ z.lazy(() => EnergyCreateWithoutProjectTemplatesInputSchema),z.lazy(() => EnergyUncheckedCreateWithoutProjectTemplatesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EnergyCreateOrConnectWithoutProjectTemplatesInputSchema).optional(),
  connect: z.lazy(() => EnergyWhereUniqueInputSchema).optional()
}).strict();

export default EnergyCreateNestedOneWithoutProjectTemplatesInputSchema;
