import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyUpdateWithoutProjectTemplatesInputSchema } from './EnergyUpdateWithoutProjectTemplatesInputSchema';
import { EnergyUncheckedUpdateWithoutProjectTemplatesInputSchema } from './EnergyUncheckedUpdateWithoutProjectTemplatesInputSchema';
import { EnergyCreateWithoutProjectTemplatesInputSchema } from './EnergyCreateWithoutProjectTemplatesInputSchema';
import { EnergyUncheckedCreateWithoutProjectTemplatesInputSchema } from './EnergyUncheckedCreateWithoutProjectTemplatesInputSchema';
import { EnergyWhereInputSchema } from './EnergyWhereInputSchema';

export const EnergyUpsertWithoutProjectTemplatesInputSchema: z.ZodType<Prisma.EnergyUpsertWithoutProjectTemplatesInput> = z.object({
  update: z.union([ z.lazy(() => EnergyUpdateWithoutProjectTemplatesInputSchema),z.lazy(() => EnergyUncheckedUpdateWithoutProjectTemplatesInputSchema) ]),
  create: z.union([ z.lazy(() => EnergyCreateWithoutProjectTemplatesInputSchema),z.lazy(() => EnergyUncheckedCreateWithoutProjectTemplatesInputSchema) ]),
  where: z.lazy(() => EnergyWhereInputSchema).optional()
}).strict();

export default EnergyUpsertWithoutProjectTemplatesInputSchema;
