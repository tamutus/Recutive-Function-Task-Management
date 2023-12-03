import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyUpdateWithoutTaskTemplatesInputSchema } from './EnergyUpdateWithoutTaskTemplatesInputSchema';
import { EnergyUncheckedUpdateWithoutTaskTemplatesInputSchema } from './EnergyUncheckedUpdateWithoutTaskTemplatesInputSchema';
import { EnergyCreateWithoutTaskTemplatesInputSchema } from './EnergyCreateWithoutTaskTemplatesInputSchema';
import { EnergyUncheckedCreateWithoutTaskTemplatesInputSchema } from './EnergyUncheckedCreateWithoutTaskTemplatesInputSchema';
import { EnergyWhereInputSchema } from './EnergyWhereInputSchema';

export const EnergyUpsertWithoutTaskTemplatesInputSchema: z.ZodType<Prisma.EnergyUpsertWithoutTaskTemplatesInput> = z.object({
  update: z.union([ z.lazy(() => EnergyUpdateWithoutTaskTemplatesInputSchema),z.lazy(() => EnergyUncheckedUpdateWithoutTaskTemplatesInputSchema) ]),
  create: z.union([ z.lazy(() => EnergyCreateWithoutTaskTemplatesInputSchema),z.lazy(() => EnergyUncheckedCreateWithoutTaskTemplatesInputSchema) ]),
  where: z.lazy(() => EnergyWhereInputSchema).optional()
}).strict();

export default EnergyUpsertWithoutTaskTemplatesInputSchema;
