import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyCreateWithoutTasksInputSchema } from './PrivateEnergyCreateWithoutTasksInputSchema';
import { PrivateEnergyUncheckedCreateWithoutTasksInputSchema } from './PrivateEnergyUncheckedCreateWithoutTasksInputSchema';
import { PrivateEnergyCreateOrConnectWithoutTasksInputSchema } from './PrivateEnergyCreateOrConnectWithoutTasksInputSchema';
import { PrivateEnergyUpsertWithoutTasksInputSchema } from './PrivateEnergyUpsertWithoutTasksInputSchema';
import { PrivateEnergyWhereUniqueInputSchema } from './PrivateEnergyWhereUniqueInputSchema';
import { PrivateEnergyUpdateToOneWithWhereWithoutTasksInputSchema } from './PrivateEnergyUpdateToOneWithWhereWithoutTasksInputSchema';
import { PrivateEnergyUpdateWithoutTasksInputSchema } from './PrivateEnergyUpdateWithoutTasksInputSchema';
import { PrivateEnergyUncheckedUpdateWithoutTasksInputSchema } from './PrivateEnergyUncheckedUpdateWithoutTasksInputSchema';

export const PrivateEnergyUpdateOneRequiredWithoutTasksNestedInputSchema: z.ZodType<Prisma.PrivateEnergyUpdateOneRequiredWithoutTasksNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergyCreateWithoutTasksInputSchema),z.lazy(() => PrivateEnergyUncheckedCreateWithoutTasksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PrivateEnergyCreateOrConnectWithoutTasksInputSchema).optional(),
  upsert: z.lazy(() => PrivateEnergyUpsertWithoutTasksInputSchema).optional(),
  connect: z.lazy(() => PrivateEnergyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PrivateEnergyUpdateToOneWithWhereWithoutTasksInputSchema),z.lazy(() => PrivateEnergyUpdateWithoutTasksInputSchema),z.lazy(() => PrivateEnergyUncheckedUpdateWithoutTasksInputSchema) ]).optional(),
}).strict();

export default PrivateEnergyUpdateOneRequiredWithoutTasksNestedInputSchema;
