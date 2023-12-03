import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyCreateWithoutTagsInputSchema } from './PrivateEnergyCreateWithoutTagsInputSchema';
import { PrivateEnergyUncheckedCreateWithoutTagsInputSchema } from './PrivateEnergyUncheckedCreateWithoutTagsInputSchema';
import { PrivateEnergyCreateOrConnectWithoutTagsInputSchema } from './PrivateEnergyCreateOrConnectWithoutTagsInputSchema';
import { PrivateEnergyUpsertWithoutTagsInputSchema } from './PrivateEnergyUpsertWithoutTagsInputSchema';
import { PrivateEnergyWhereUniqueInputSchema } from './PrivateEnergyWhereUniqueInputSchema';
import { PrivateEnergyUpdateToOneWithWhereWithoutTagsInputSchema } from './PrivateEnergyUpdateToOneWithWhereWithoutTagsInputSchema';
import { PrivateEnergyUpdateWithoutTagsInputSchema } from './PrivateEnergyUpdateWithoutTagsInputSchema';
import { PrivateEnergyUncheckedUpdateWithoutTagsInputSchema } from './PrivateEnergyUncheckedUpdateWithoutTagsInputSchema';

export const PrivateEnergyUpdateOneRequiredWithoutTagsNestedInputSchema: z.ZodType<Prisma.PrivateEnergyUpdateOneRequiredWithoutTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergyCreateWithoutTagsInputSchema),z.lazy(() => PrivateEnergyUncheckedCreateWithoutTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PrivateEnergyCreateOrConnectWithoutTagsInputSchema).optional(),
  upsert: z.lazy(() => PrivateEnergyUpsertWithoutTagsInputSchema).optional(),
  connect: z.lazy(() => PrivateEnergyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PrivateEnergyUpdateToOneWithWhereWithoutTagsInputSchema),z.lazy(() => PrivateEnergyUpdateWithoutTagsInputSchema),z.lazy(() => PrivateEnergyUncheckedUpdateWithoutTagsInputSchema) ]).optional(),
}).strict();

export default PrivateEnergyUpdateOneRequiredWithoutTagsNestedInputSchema;
