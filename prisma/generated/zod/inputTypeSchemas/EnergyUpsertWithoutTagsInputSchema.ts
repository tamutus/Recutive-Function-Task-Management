import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyUpdateWithoutTagsInputSchema } from './EnergyUpdateWithoutTagsInputSchema';
import { EnergyUncheckedUpdateWithoutTagsInputSchema } from './EnergyUncheckedUpdateWithoutTagsInputSchema';
import { EnergyCreateWithoutTagsInputSchema } from './EnergyCreateWithoutTagsInputSchema';
import { EnergyUncheckedCreateWithoutTagsInputSchema } from './EnergyUncheckedCreateWithoutTagsInputSchema';
import { EnergyWhereInputSchema } from './EnergyWhereInputSchema';

export const EnergyUpsertWithoutTagsInputSchema: z.ZodType<Prisma.EnergyUpsertWithoutTagsInput> = z.object({
  update: z.union([ z.lazy(() => EnergyUpdateWithoutTagsInputSchema),z.lazy(() => EnergyUncheckedUpdateWithoutTagsInputSchema) ]),
  create: z.union([ z.lazy(() => EnergyCreateWithoutTagsInputSchema),z.lazy(() => EnergyUncheckedCreateWithoutTagsInputSchema) ]),
  where: z.lazy(() => EnergyWhereInputSchema).optional()
}).strict();

export default EnergyUpsertWithoutTagsInputSchema;
