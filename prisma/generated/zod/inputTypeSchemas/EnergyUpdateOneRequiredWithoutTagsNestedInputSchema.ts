import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyCreateWithoutTagsInputSchema } from './EnergyCreateWithoutTagsInputSchema';
import { EnergyUncheckedCreateWithoutTagsInputSchema } from './EnergyUncheckedCreateWithoutTagsInputSchema';
import { EnergyCreateOrConnectWithoutTagsInputSchema } from './EnergyCreateOrConnectWithoutTagsInputSchema';
import { EnergyUpsertWithoutTagsInputSchema } from './EnergyUpsertWithoutTagsInputSchema';
import { EnergyWhereUniqueInputSchema } from './EnergyWhereUniqueInputSchema';
import { EnergyUpdateToOneWithWhereWithoutTagsInputSchema } from './EnergyUpdateToOneWithWhereWithoutTagsInputSchema';
import { EnergyUpdateWithoutTagsInputSchema } from './EnergyUpdateWithoutTagsInputSchema';
import { EnergyUncheckedUpdateWithoutTagsInputSchema } from './EnergyUncheckedUpdateWithoutTagsInputSchema';

export const EnergyUpdateOneRequiredWithoutTagsNestedInputSchema: z.ZodType<Prisma.EnergyUpdateOneRequiredWithoutTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => EnergyCreateWithoutTagsInputSchema),z.lazy(() => EnergyUncheckedCreateWithoutTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EnergyCreateOrConnectWithoutTagsInputSchema).optional(),
  upsert: z.lazy(() => EnergyUpsertWithoutTagsInputSchema).optional(),
  connect: z.lazy(() => EnergyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => EnergyUpdateToOneWithWhereWithoutTagsInputSchema),z.lazy(() => EnergyUpdateWithoutTagsInputSchema),z.lazy(() => EnergyUncheckedUpdateWithoutTagsInputSchema) ]).optional(),
}).strict();

export default EnergyUpdateOneRequiredWithoutTagsNestedInputSchema;
