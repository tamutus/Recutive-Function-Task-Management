import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyCreateWithoutExperiencesInputSchema } from './EnergyCreateWithoutExperiencesInputSchema';
import { EnergyUncheckedCreateWithoutExperiencesInputSchema } from './EnergyUncheckedCreateWithoutExperiencesInputSchema';
import { EnergyCreateOrConnectWithoutExperiencesInputSchema } from './EnergyCreateOrConnectWithoutExperiencesInputSchema';
import { EnergyWhereUniqueInputSchema } from './EnergyWhereUniqueInputSchema';

export const EnergyCreateNestedOneWithoutExperiencesInputSchema: z.ZodType<Prisma.EnergyCreateNestedOneWithoutExperiencesInput> = z.object({
  create: z.union([ z.lazy(() => EnergyCreateWithoutExperiencesInputSchema),z.lazy(() => EnergyUncheckedCreateWithoutExperiencesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EnergyCreateOrConnectWithoutExperiencesInputSchema).optional(),
  connect: z.lazy(() => EnergyWhereUniqueInputSchema).optional()
}).strict();

export default EnergyCreateNestedOneWithoutExperiencesInputSchema;
