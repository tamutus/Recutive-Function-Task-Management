import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyCreateWithoutPrivateTagsInputSchema } from './EnergyCreateWithoutPrivateTagsInputSchema';
import { EnergyUncheckedCreateWithoutPrivateTagsInputSchema } from './EnergyUncheckedCreateWithoutPrivateTagsInputSchema';
import { EnergyCreateOrConnectWithoutPrivateTagsInputSchema } from './EnergyCreateOrConnectWithoutPrivateTagsInputSchema';
import { EnergyUpsertWithoutPrivateTagsInputSchema } from './EnergyUpsertWithoutPrivateTagsInputSchema';
import { EnergyWhereUniqueInputSchema } from './EnergyWhereUniqueInputSchema';
import { EnergyUpdateToOneWithWhereWithoutPrivateTagsInputSchema } from './EnergyUpdateToOneWithWhereWithoutPrivateTagsInputSchema';
import { EnergyUpdateWithoutPrivateTagsInputSchema } from './EnergyUpdateWithoutPrivateTagsInputSchema';
import { EnergyUncheckedUpdateWithoutPrivateTagsInputSchema } from './EnergyUncheckedUpdateWithoutPrivateTagsInputSchema';

export const EnergyUpdateOneRequiredWithoutPrivateTagsNestedInputSchema: z.ZodType<Prisma.EnergyUpdateOneRequiredWithoutPrivateTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => EnergyCreateWithoutPrivateTagsInputSchema),z.lazy(() => EnergyUncheckedCreateWithoutPrivateTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EnergyCreateOrConnectWithoutPrivateTagsInputSchema).optional(),
  upsert: z.lazy(() => EnergyUpsertWithoutPrivateTagsInputSchema).optional(),
  connect: z.lazy(() => EnergyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => EnergyUpdateToOneWithWhereWithoutPrivateTagsInputSchema),z.lazy(() => EnergyUpdateWithoutPrivateTagsInputSchema),z.lazy(() => EnergyUncheckedUpdateWithoutPrivateTagsInputSchema) ]).optional(),
}).strict();

export default EnergyUpdateOneRequiredWithoutPrivateTagsNestedInputSchema;
