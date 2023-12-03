import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyUpdateWithoutPrivateTagsInputSchema } from './PrivateEnergyUpdateWithoutPrivateTagsInputSchema';
import { PrivateEnergyUncheckedUpdateWithoutPrivateTagsInputSchema } from './PrivateEnergyUncheckedUpdateWithoutPrivateTagsInputSchema';
import { PrivateEnergyCreateWithoutPrivateTagsInputSchema } from './PrivateEnergyCreateWithoutPrivateTagsInputSchema';
import { PrivateEnergyUncheckedCreateWithoutPrivateTagsInputSchema } from './PrivateEnergyUncheckedCreateWithoutPrivateTagsInputSchema';
import { PrivateEnergyWhereInputSchema } from './PrivateEnergyWhereInputSchema';

export const PrivateEnergyUpsertWithoutPrivateTagsInputSchema: z.ZodType<Prisma.PrivateEnergyUpsertWithoutPrivateTagsInput> = z.object({
  update: z.union([ z.lazy(() => PrivateEnergyUpdateWithoutPrivateTagsInputSchema),z.lazy(() => PrivateEnergyUncheckedUpdateWithoutPrivateTagsInputSchema) ]),
  create: z.union([ z.lazy(() => PrivateEnergyCreateWithoutPrivateTagsInputSchema),z.lazy(() => PrivateEnergyUncheckedCreateWithoutPrivateTagsInputSchema) ]),
  where: z.lazy(() => PrivateEnergyWhereInputSchema).optional()
}).strict();

export default PrivateEnergyUpsertWithoutPrivateTagsInputSchema;
