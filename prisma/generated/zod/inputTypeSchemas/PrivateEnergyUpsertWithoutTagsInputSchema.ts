import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyUpdateWithoutTagsInputSchema } from './PrivateEnergyUpdateWithoutTagsInputSchema';
import { PrivateEnergyUncheckedUpdateWithoutTagsInputSchema } from './PrivateEnergyUncheckedUpdateWithoutTagsInputSchema';
import { PrivateEnergyCreateWithoutTagsInputSchema } from './PrivateEnergyCreateWithoutTagsInputSchema';
import { PrivateEnergyUncheckedCreateWithoutTagsInputSchema } from './PrivateEnergyUncheckedCreateWithoutTagsInputSchema';
import { PrivateEnergyWhereInputSchema } from './PrivateEnergyWhereInputSchema';

export const PrivateEnergyUpsertWithoutTagsInputSchema: z.ZodType<Prisma.PrivateEnergyUpsertWithoutTagsInput> = z.object({
  update: z.union([ z.lazy(() => PrivateEnergyUpdateWithoutTagsInputSchema),z.lazy(() => PrivateEnergyUncheckedUpdateWithoutTagsInputSchema) ]),
  create: z.union([ z.lazy(() => PrivateEnergyCreateWithoutTagsInputSchema),z.lazy(() => PrivateEnergyUncheckedCreateWithoutTagsInputSchema) ]),
  where: z.lazy(() => PrivateEnergyWhereInputSchema).optional()
}).strict();

export default PrivateEnergyUpsertWithoutTagsInputSchema;
