import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyCreateWithoutTaskTemplatesInputSchema } from './EnergyCreateWithoutTaskTemplatesInputSchema';
import { EnergyUncheckedCreateWithoutTaskTemplatesInputSchema } from './EnergyUncheckedCreateWithoutTaskTemplatesInputSchema';
import { EnergyCreateOrConnectWithoutTaskTemplatesInputSchema } from './EnergyCreateOrConnectWithoutTaskTemplatesInputSchema';
import { EnergyUpsertWithoutTaskTemplatesInputSchema } from './EnergyUpsertWithoutTaskTemplatesInputSchema';
import { EnergyWhereUniqueInputSchema } from './EnergyWhereUniqueInputSchema';
import { EnergyUpdateToOneWithWhereWithoutTaskTemplatesInputSchema } from './EnergyUpdateToOneWithWhereWithoutTaskTemplatesInputSchema';
import { EnergyUpdateWithoutTaskTemplatesInputSchema } from './EnergyUpdateWithoutTaskTemplatesInputSchema';
import { EnergyUncheckedUpdateWithoutTaskTemplatesInputSchema } from './EnergyUncheckedUpdateWithoutTaskTemplatesInputSchema';

export const EnergyUpdateOneRequiredWithoutTaskTemplatesNestedInputSchema: z.ZodType<Prisma.EnergyUpdateOneRequiredWithoutTaskTemplatesNestedInput> = z.object({
  create: z.union([ z.lazy(() => EnergyCreateWithoutTaskTemplatesInputSchema),z.lazy(() => EnergyUncheckedCreateWithoutTaskTemplatesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EnergyCreateOrConnectWithoutTaskTemplatesInputSchema).optional(),
  upsert: z.lazy(() => EnergyUpsertWithoutTaskTemplatesInputSchema).optional(),
  connect: z.lazy(() => EnergyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => EnergyUpdateToOneWithWhereWithoutTaskTemplatesInputSchema),z.lazy(() => EnergyUpdateWithoutTaskTemplatesInputSchema),z.lazy(() => EnergyUncheckedUpdateWithoutTaskTemplatesInputSchema) ]).optional(),
}).strict();

export default EnergyUpdateOneRequiredWithoutTaskTemplatesNestedInputSchema;
