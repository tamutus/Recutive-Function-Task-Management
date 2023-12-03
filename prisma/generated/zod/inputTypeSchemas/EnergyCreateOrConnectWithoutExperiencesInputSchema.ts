import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyWhereUniqueInputSchema } from './EnergyWhereUniqueInputSchema';
import { EnergyCreateWithoutExperiencesInputSchema } from './EnergyCreateWithoutExperiencesInputSchema';
import { EnergyUncheckedCreateWithoutExperiencesInputSchema } from './EnergyUncheckedCreateWithoutExperiencesInputSchema';

export const EnergyCreateOrConnectWithoutExperiencesInputSchema: z.ZodType<Prisma.EnergyCreateOrConnectWithoutExperiencesInput> = z.object({
  where: z.lazy(() => EnergyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EnergyCreateWithoutExperiencesInputSchema),z.lazy(() => EnergyUncheckedCreateWithoutExperiencesInputSchema) ]),
}).strict();

export default EnergyCreateOrConnectWithoutExperiencesInputSchema;
