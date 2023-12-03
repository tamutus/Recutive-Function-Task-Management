import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagCreateWithoutPrivateEnergiesInputSchema } from './PrivateTagCreateWithoutPrivateEnergiesInputSchema';
import { PrivateTagUncheckedCreateWithoutPrivateEnergiesInputSchema } from './PrivateTagUncheckedCreateWithoutPrivateEnergiesInputSchema';
import { PrivateTagCreateOrConnectWithoutPrivateEnergiesInputSchema } from './PrivateTagCreateOrConnectWithoutPrivateEnergiesInputSchema';
import { PrivateTagUpsertWithoutPrivateEnergiesInputSchema } from './PrivateTagUpsertWithoutPrivateEnergiesInputSchema';
import { PrivateTagWhereUniqueInputSchema } from './PrivateTagWhereUniqueInputSchema';
import { PrivateTagUpdateToOneWithWhereWithoutPrivateEnergiesInputSchema } from './PrivateTagUpdateToOneWithWhereWithoutPrivateEnergiesInputSchema';
import { PrivateTagUpdateWithoutPrivateEnergiesInputSchema } from './PrivateTagUpdateWithoutPrivateEnergiesInputSchema';
import { PrivateTagUncheckedUpdateWithoutPrivateEnergiesInputSchema } from './PrivateTagUncheckedUpdateWithoutPrivateEnergiesInputSchema';

export const PrivateTagUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema: z.ZodType<Prisma.PrivateTagUpdateOneRequiredWithoutPrivateEnergiesNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrivateTagCreateWithoutPrivateEnergiesInputSchema),z.lazy(() => PrivateTagUncheckedCreateWithoutPrivateEnergiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PrivateTagCreateOrConnectWithoutPrivateEnergiesInputSchema).optional(),
  upsert: z.lazy(() => PrivateTagUpsertWithoutPrivateEnergiesInputSchema).optional(),
  connect: z.lazy(() => PrivateTagWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PrivateTagUpdateToOneWithWhereWithoutPrivateEnergiesInputSchema),z.lazy(() => PrivateTagUpdateWithoutPrivateEnergiesInputSchema),z.lazy(() => PrivateTagUncheckedUpdateWithoutPrivateEnergiesInputSchema) ]).optional(),
}).strict();

export default PrivateTagUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema;
