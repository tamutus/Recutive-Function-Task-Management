import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyCreateWithoutTaskWorkInputSchema } from './PrivateEnergyCreateWithoutTaskWorkInputSchema';
import { PrivateEnergyUncheckedCreateWithoutTaskWorkInputSchema } from './PrivateEnergyUncheckedCreateWithoutTaskWorkInputSchema';
import { PrivateEnergyCreateOrConnectWithoutTaskWorkInputSchema } from './PrivateEnergyCreateOrConnectWithoutTaskWorkInputSchema';
import { PrivateEnergyUpsertWithoutTaskWorkInputSchema } from './PrivateEnergyUpsertWithoutTaskWorkInputSchema';
import { PrivateEnergyWhereUniqueInputSchema } from './PrivateEnergyWhereUniqueInputSchema';
import { PrivateEnergyUpdateToOneWithWhereWithoutTaskWorkInputSchema } from './PrivateEnergyUpdateToOneWithWhereWithoutTaskWorkInputSchema';
import { PrivateEnergyUpdateWithoutTaskWorkInputSchema } from './PrivateEnergyUpdateWithoutTaskWorkInputSchema';
import { PrivateEnergyUncheckedUpdateWithoutTaskWorkInputSchema } from './PrivateEnergyUncheckedUpdateWithoutTaskWorkInputSchema';

export const PrivateEnergyUpdateOneRequiredWithoutTaskWorkNestedInputSchema: z.ZodType<Prisma.PrivateEnergyUpdateOneRequiredWithoutTaskWorkNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergyCreateWithoutTaskWorkInputSchema),z.lazy(() => PrivateEnergyUncheckedCreateWithoutTaskWorkInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PrivateEnergyCreateOrConnectWithoutTaskWorkInputSchema).optional(),
  upsert: z.lazy(() => PrivateEnergyUpsertWithoutTaskWorkInputSchema).optional(),
  connect: z.lazy(() => PrivateEnergyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PrivateEnergyUpdateToOneWithWhereWithoutTaskWorkInputSchema),z.lazy(() => PrivateEnergyUpdateWithoutTaskWorkInputSchema),z.lazy(() => PrivateEnergyUncheckedUpdateWithoutTaskWorkInputSchema) ]).optional(),
}).strict();

export default PrivateEnergyUpdateOneRequiredWithoutTaskWorkNestedInputSchema;
