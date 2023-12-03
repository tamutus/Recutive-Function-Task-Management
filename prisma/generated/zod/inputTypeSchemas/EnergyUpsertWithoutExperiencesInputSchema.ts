import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyUpdateWithoutExperiencesInputSchema } from './EnergyUpdateWithoutExperiencesInputSchema';
import { EnergyUncheckedUpdateWithoutExperiencesInputSchema } from './EnergyUncheckedUpdateWithoutExperiencesInputSchema';
import { EnergyCreateWithoutExperiencesInputSchema } from './EnergyCreateWithoutExperiencesInputSchema';
import { EnergyUncheckedCreateWithoutExperiencesInputSchema } from './EnergyUncheckedCreateWithoutExperiencesInputSchema';
import { EnergyWhereInputSchema } from './EnergyWhereInputSchema';

export const EnergyUpsertWithoutExperiencesInputSchema: z.ZodType<Prisma.EnergyUpsertWithoutExperiencesInput> = z.object({
  update: z.union([ z.lazy(() => EnergyUpdateWithoutExperiencesInputSchema),z.lazy(() => EnergyUncheckedUpdateWithoutExperiencesInputSchema) ]),
  create: z.union([ z.lazy(() => EnergyCreateWithoutExperiencesInputSchema),z.lazy(() => EnergyUncheckedCreateWithoutExperiencesInputSchema) ]),
  where: z.lazy(() => EnergyWhereInputSchema).optional()
}).strict();

export default EnergyUpsertWithoutExperiencesInputSchema;
