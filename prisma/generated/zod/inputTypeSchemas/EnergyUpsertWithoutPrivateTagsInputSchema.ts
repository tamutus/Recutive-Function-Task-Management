import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyUpdateWithoutPrivateTagsInputSchema } from './EnergyUpdateWithoutPrivateTagsInputSchema';
import { EnergyUncheckedUpdateWithoutPrivateTagsInputSchema } from './EnergyUncheckedUpdateWithoutPrivateTagsInputSchema';
import { EnergyCreateWithoutPrivateTagsInputSchema } from './EnergyCreateWithoutPrivateTagsInputSchema';
import { EnergyUncheckedCreateWithoutPrivateTagsInputSchema } from './EnergyUncheckedCreateWithoutPrivateTagsInputSchema';
import { EnergyWhereInputSchema } from './EnergyWhereInputSchema';

export const EnergyUpsertWithoutPrivateTagsInputSchema: z.ZodType<Prisma.EnergyUpsertWithoutPrivateTagsInput> = z.object({
  update: z.union([ z.lazy(() => EnergyUpdateWithoutPrivateTagsInputSchema),z.lazy(() => EnergyUncheckedUpdateWithoutPrivateTagsInputSchema) ]),
  create: z.union([ z.lazy(() => EnergyCreateWithoutPrivateTagsInputSchema),z.lazy(() => EnergyUncheckedCreateWithoutPrivateTagsInputSchema) ]),
  where: z.lazy(() => EnergyWhereInputSchema).optional()
}).strict();

export default EnergyUpsertWithoutPrivateTagsInputSchema;
