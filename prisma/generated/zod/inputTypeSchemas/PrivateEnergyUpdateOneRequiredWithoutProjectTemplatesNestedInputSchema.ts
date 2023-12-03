import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyCreateWithoutProjectTemplatesInputSchema } from './PrivateEnergyCreateWithoutProjectTemplatesInputSchema';
import { PrivateEnergyUncheckedCreateWithoutProjectTemplatesInputSchema } from './PrivateEnergyUncheckedCreateWithoutProjectTemplatesInputSchema';
import { PrivateEnergyCreateOrConnectWithoutProjectTemplatesInputSchema } from './PrivateEnergyCreateOrConnectWithoutProjectTemplatesInputSchema';
import { PrivateEnergyUpsertWithoutProjectTemplatesInputSchema } from './PrivateEnergyUpsertWithoutProjectTemplatesInputSchema';
import { PrivateEnergyWhereUniqueInputSchema } from './PrivateEnergyWhereUniqueInputSchema';
import { PrivateEnergyUpdateToOneWithWhereWithoutProjectTemplatesInputSchema } from './PrivateEnergyUpdateToOneWithWhereWithoutProjectTemplatesInputSchema';
import { PrivateEnergyUpdateWithoutProjectTemplatesInputSchema } from './PrivateEnergyUpdateWithoutProjectTemplatesInputSchema';
import { PrivateEnergyUncheckedUpdateWithoutProjectTemplatesInputSchema } from './PrivateEnergyUncheckedUpdateWithoutProjectTemplatesInputSchema';

export const PrivateEnergyUpdateOneRequiredWithoutProjectTemplatesNestedInputSchema: z.ZodType<Prisma.PrivateEnergyUpdateOneRequiredWithoutProjectTemplatesNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergyCreateWithoutProjectTemplatesInputSchema),z.lazy(() => PrivateEnergyUncheckedCreateWithoutProjectTemplatesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PrivateEnergyCreateOrConnectWithoutProjectTemplatesInputSchema).optional(),
  upsert: z.lazy(() => PrivateEnergyUpsertWithoutProjectTemplatesInputSchema).optional(),
  connect: z.lazy(() => PrivateEnergyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PrivateEnergyUpdateToOneWithWhereWithoutProjectTemplatesInputSchema),z.lazy(() => PrivateEnergyUpdateWithoutProjectTemplatesInputSchema),z.lazy(() => PrivateEnergyUncheckedUpdateWithoutProjectTemplatesInputSchema) ]).optional(),
}).strict();

export default PrivateEnergyUpdateOneRequiredWithoutProjectTemplatesNestedInputSchema;
