import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyCreateWithoutProjectsInputSchema } from './PrivateEnergyCreateWithoutProjectsInputSchema';
import { PrivateEnergyUncheckedCreateWithoutProjectsInputSchema } from './PrivateEnergyUncheckedCreateWithoutProjectsInputSchema';
import { PrivateEnergyCreateOrConnectWithoutProjectsInputSchema } from './PrivateEnergyCreateOrConnectWithoutProjectsInputSchema';
import { PrivateEnergyUpsertWithoutProjectsInputSchema } from './PrivateEnergyUpsertWithoutProjectsInputSchema';
import { PrivateEnergyWhereUniqueInputSchema } from './PrivateEnergyWhereUniqueInputSchema';
import { PrivateEnergyUpdateToOneWithWhereWithoutProjectsInputSchema } from './PrivateEnergyUpdateToOneWithWhereWithoutProjectsInputSchema';
import { PrivateEnergyUpdateWithoutProjectsInputSchema } from './PrivateEnergyUpdateWithoutProjectsInputSchema';
import { PrivateEnergyUncheckedUpdateWithoutProjectsInputSchema } from './PrivateEnergyUncheckedUpdateWithoutProjectsInputSchema';

export const PrivateEnergyUpdateOneRequiredWithoutProjectsNestedInputSchema: z.ZodType<Prisma.PrivateEnergyUpdateOneRequiredWithoutProjectsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergyCreateWithoutProjectsInputSchema),z.lazy(() => PrivateEnergyUncheckedCreateWithoutProjectsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PrivateEnergyCreateOrConnectWithoutProjectsInputSchema).optional(),
  upsert: z.lazy(() => PrivateEnergyUpsertWithoutProjectsInputSchema).optional(),
  connect: z.lazy(() => PrivateEnergyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PrivateEnergyUpdateToOneWithWhereWithoutProjectsInputSchema),z.lazy(() => PrivateEnergyUpdateWithoutProjectsInputSchema),z.lazy(() => PrivateEnergyUncheckedUpdateWithoutProjectsInputSchema) ]).optional(),
}).strict();

export default PrivateEnergyUpdateOneRequiredWithoutProjectsNestedInputSchema;
