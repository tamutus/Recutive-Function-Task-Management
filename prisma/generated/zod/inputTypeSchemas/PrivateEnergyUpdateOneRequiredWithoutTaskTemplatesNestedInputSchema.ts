import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyCreateWithoutTaskTemplatesInputSchema } from './PrivateEnergyCreateWithoutTaskTemplatesInputSchema';
import { PrivateEnergyUncheckedCreateWithoutTaskTemplatesInputSchema } from './PrivateEnergyUncheckedCreateWithoutTaskTemplatesInputSchema';
import { PrivateEnergyCreateOrConnectWithoutTaskTemplatesInputSchema } from './PrivateEnergyCreateOrConnectWithoutTaskTemplatesInputSchema';
import { PrivateEnergyUpsertWithoutTaskTemplatesInputSchema } from './PrivateEnergyUpsertWithoutTaskTemplatesInputSchema';
import { PrivateEnergyWhereUniqueInputSchema } from './PrivateEnergyWhereUniqueInputSchema';
import { PrivateEnergyUpdateToOneWithWhereWithoutTaskTemplatesInputSchema } from './PrivateEnergyUpdateToOneWithWhereWithoutTaskTemplatesInputSchema';
import { PrivateEnergyUpdateWithoutTaskTemplatesInputSchema } from './PrivateEnergyUpdateWithoutTaskTemplatesInputSchema';
import { PrivateEnergyUncheckedUpdateWithoutTaskTemplatesInputSchema } from './PrivateEnergyUncheckedUpdateWithoutTaskTemplatesInputSchema';

export const PrivateEnergyUpdateOneRequiredWithoutTaskTemplatesNestedInputSchema: z.ZodType<Prisma.PrivateEnergyUpdateOneRequiredWithoutTaskTemplatesNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergyCreateWithoutTaskTemplatesInputSchema),z.lazy(() => PrivateEnergyUncheckedCreateWithoutTaskTemplatesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PrivateEnergyCreateOrConnectWithoutTaskTemplatesInputSchema).optional(),
  upsert: z.lazy(() => PrivateEnergyUpsertWithoutTaskTemplatesInputSchema).optional(),
  connect: z.lazy(() => PrivateEnergyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PrivateEnergyUpdateToOneWithWhereWithoutTaskTemplatesInputSchema),z.lazy(() => PrivateEnergyUpdateWithoutTaskTemplatesInputSchema),z.lazy(() => PrivateEnergyUncheckedUpdateWithoutTaskTemplatesInputSchema) ]).optional(),
}).strict();

export default PrivateEnergyUpdateOneRequiredWithoutTaskTemplatesNestedInputSchema;
