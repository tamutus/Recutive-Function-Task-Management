import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyCreateWithoutProjectTemplatesInputSchema } from './EnergyCreateWithoutProjectTemplatesInputSchema';
import { EnergyUncheckedCreateWithoutProjectTemplatesInputSchema } from './EnergyUncheckedCreateWithoutProjectTemplatesInputSchema';
import { EnergyCreateOrConnectWithoutProjectTemplatesInputSchema } from './EnergyCreateOrConnectWithoutProjectTemplatesInputSchema';
import { EnergyUpsertWithoutProjectTemplatesInputSchema } from './EnergyUpsertWithoutProjectTemplatesInputSchema';
import { EnergyWhereUniqueInputSchema } from './EnergyWhereUniqueInputSchema';
import { EnergyUpdateToOneWithWhereWithoutProjectTemplatesInputSchema } from './EnergyUpdateToOneWithWhereWithoutProjectTemplatesInputSchema';
import { EnergyUpdateWithoutProjectTemplatesInputSchema } from './EnergyUpdateWithoutProjectTemplatesInputSchema';
import { EnergyUncheckedUpdateWithoutProjectTemplatesInputSchema } from './EnergyUncheckedUpdateWithoutProjectTemplatesInputSchema';

export const EnergyUpdateOneRequiredWithoutProjectTemplatesNestedInputSchema: z.ZodType<Prisma.EnergyUpdateOneRequiredWithoutProjectTemplatesNestedInput> = z.object({
  create: z.union([ z.lazy(() => EnergyCreateWithoutProjectTemplatesInputSchema),z.lazy(() => EnergyUncheckedCreateWithoutProjectTemplatesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EnergyCreateOrConnectWithoutProjectTemplatesInputSchema).optional(),
  upsert: z.lazy(() => EnergyUpsertWithoutProjectTemplatesInputSchema).optional(),
  connect: z.lazy(() => EnergyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => EnergyUpdateToOneWithWhereWithoutProjectTemplatesInputSchema),z.lazy(() => EnergyUpdateWithoutProjectTemplatesInputSchema),z.lazy(() => EnergyUncheckedUpdateWithoutProjectTemplatesInputSchema) ]).optional(),
}).strict();

export default EnergyUpdateOneRequiredWithoutProjectTemplatesNestedInputSchema;
