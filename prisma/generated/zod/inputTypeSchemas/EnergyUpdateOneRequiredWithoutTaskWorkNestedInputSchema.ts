import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyCreateWithoutTaskWorkInputSchema } from './EnergyCreateWithoutTaskWorkInputSchema';
import { EnergyUncheckedCreateWithoutTaskWorkInputSchema } from './EnergyUncheckedCreateWithoutTaskWorkInputSchema';
import { EnergyCreateOrConnectWithoutTaskWorkInputSchema } from './EnergyCreateOrConnectWithoutTaskWorkInputSchema';
import { EnergyUpsertWithoutTaskWorkInputSchema } from './EnergyUpsertWithoutTaskWorkInputSchema';
import { EnergyWhereUniqueInputSchema } from './EnergyWhereUniqueInputSchema';
import { EnergyUpdateToOneWithWhereWithoutTaskWorkInputSchema } from './EnergyUpdateToOneWithWhereWithoutTaskWorkInputSchema';
import { EnergyUpdateWithoutTaskWorkInputSchema } from './EnergyUpdateWithoutTaskWorkInputSchema';
import { EnergyUncheckedUpdateWithoutTaskWorkInputSchema } from './EnergyUncheckedUpdateWithoutTaskWorkInputSchema';

export const EnergyUpdateOneRequiredWithoutTaskWorkNestedInputSchema: z.ZodType<Prisma.EnergyUpdateOneRequiredWithoutTaskWorkNestedInput> = z.object({
  create: z.union([ z.lazy(() => EnergyCreateWithoutTaskWorkInputSchema),z.lazy(() => EnergyUncheckedCreateWithoutTaskWorkInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EnergyCreateOrConnectWithoutTaskWorkInputSchema).optional(),
  upsert: z.lazy(() => EnergyUpsertWithoutTaskWorkInputSchema).optional(),
  connect: z.lazy(() => EnergyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => EnergyUpdateToOneWithWhereWithoutTaskWorkInputSchema),z.lazy(() => EnergyUpdateWithoutTaskWorkInputSchema),z.lazy(() => EnergyUncheckedUpdateWithoutTaskWorkInputSchema) ]).optional(),
}).strict();

export default EnergyUpdateOneRequiredWithoutTaskWorkNestedInputSchema;
