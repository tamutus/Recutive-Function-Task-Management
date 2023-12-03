import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyUpdateWithoutProjectsInputSchema } from './EnergyUpdateWithoutProjectsInputSchema';
import { EnergyUncheckedUpdateWithoutProjectsInputSchema } from './EnergyUncheckedUpdateWithoutProjectsInputSchema';
import { EnergyCreateWithoutProjectsInputSchema } from './EnergyCreateWithoutProjectsInputSchema';
import { EnergyUncheckedCreateWithoutProjectsInputSchema } from './EnergyUncheckedCreateWithoutProjectsInputSchema';
import { EnergyWhereInputSchema } from './EnergyWhereInputSchema';

export const EnergyUpsertWithoutProjectsInputSchema: z.ZodType<Prisma.EnergyUpsertWithoutProjectsInput> = z.object({
  update: z.union([ z.lazy(() => EnergyUpdateWithoutProjectsInputSchema),z.lazy(() => EnergyUncheckedUpdateWithoutProjectsInputSchema) ]),
  create: z.union([ z.lazy(() => EnergyCreateWithoutProjectsInputSchema),z.lazy(() => EnergyUncheckedCreateWithoutProjectsInputSchema) ]),
  where: z.lazy(() => EnergyWhereInputSchema).optional()
}).strict();

export default EnergyUpsertWithoutProjectsInputSchema;
