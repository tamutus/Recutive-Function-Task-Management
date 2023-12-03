import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyUpdateWithoutTaskTemplatesInputSchema } from './PrivateEnergyUpdateWithoutTaskTemplatesInputSchema';
import { PrivateEnergyUncheckedUpdateWithoutTaskTemplatesInputSchema } from './PrivateEnergyUncheckedUpdateWithoutTaskTemplatesInputSchema';
import { PrivateEnergyCreateWithoutTaskTemplatesInputSchema } from './PrivateEnergyCreateWithoutTaskTemplatesInputSchema';
import { PrivateEnergyUncheckedCreateWithoutTaskTemplatesInputSchema } from './PrivateEnergyUncheckedCreateWithoutTaskTemplatesInputSchema';
import { PrivateEnergyWhereInputSchema } from './PrivateEnergyWhereInputSchema';

export const PrivateEnergyUpsertWithoutTaskTemplatesInputSchema: z.ZodType<Prisma.PrivateEnergyUpsertWithoutTaskTemplatesInput> = z.object({
  update: z.union([ z.lazy(() => PrivateEnergyUpdateWithoutTaskTemplatesInputSchema),z.lazy(() => PrivateEnergyUncheckedUpdateWithoutTaskTemplatesInputSchema) ]),
  create: z.union([ z.lazy(() => PrivateEnergyCreateWithoutTaskTemplatesInputSchema),z.lazy(() => PrivateEnergyUncheckedCreateWithoutTaskTemplatesInputSchema) ]),
  where: z.lazy(() => PrivateEnergyWhereInputSchema).optional()
}).strict();

export default PrivateEnergyUpsertWithoutTaskTemplatesInputSchema;
