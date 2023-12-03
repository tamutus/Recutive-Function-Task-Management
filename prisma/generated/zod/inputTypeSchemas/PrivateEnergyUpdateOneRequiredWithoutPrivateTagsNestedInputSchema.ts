import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyCreateWithoutPrivateTagsInputSchema } from './PrivateEnergyCreateWithoutPrivateTagsInputSchema';
import { PrivateEnergyUncheckedCreateWithoutPrivateTagsInputSchema } from './PrivateEnergyUncheckedCreateWithoutPrivateTagsInputSchema';
import { PrivateEnergyCreateOrConnectWithoutPrivateTagsInputSchema } from './PrivateEnergyCreateOrConnectWithoutPrivateTagsInputSchema';
import { PrivateEnergyUpsertWithoutPrivateTagsInputSchema } from './PrivateEnergyUpsertWithoutPrivateTagsInputSchema';
import { PrivateEnergyWhereUniqueInputSchema } from './PrivateEnergyWhereUniqueInputSchema';
import { PrivateEnergyUpdateToOneWithWhereWithoutPrivateTagsInputSchema } from './PrivateEnergyUpdateToOneWithWhereWithoutPrivateTagsInputSchema';
import { PrivateEnergyUpdateWithoutPrivateTagsInputSchema } from './PrivateEnergyUpdateWithoutPrivateTagsInputSchema';
import { PrivateEnergyUncheckedUpdateWithoutPrivateTagsInputSchema } from './PrivateEnergyUncheckedUpdateWithoutPrivateTagsInputSchema';

export const PrivateEnergyUpdateOneRequiredWithoutPrivateTagsNestedInputSchema: z.ZodType<Prisma.PrivateEnergyUpdateOneRequiredWithoutPrivateTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergyCreateWithoutPrivateTagsInputSchema),z.lazy(() => PrivateEnergyUncheckedCreateWithoutPrivateTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PrivateEnergyCreateOrConnectWithoutPrivateTagsInputSchema).optional(),
  upsert: z.lazy(() => PrivateEnergyUpsertWithoutPrivateTagsInputSchema).optional(),
  connect: z.lazy(() => PrivateEnergyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PrivateEnergyUpdateToOneWithWhereWithoutPrivateTagsInputSchema),z.lazy(() => PrivateEnergyUpdateWithoutPrivateTagsInputSchema),z.lazy(() => PrivateEnergyUncheckedUpdateWithoutPrivateTagsInputSchema) ]).optional(),
}).strict();

export default PrivateEnergyUpdateOneRequiredWithoutPrivateTagsNestedInputSchema;
