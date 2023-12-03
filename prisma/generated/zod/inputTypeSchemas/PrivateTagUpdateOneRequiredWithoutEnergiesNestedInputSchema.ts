import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagCreateWithoutEnergiesInputSchema } from './PrivateTagCreateWithoutEnergiesInputSchema';
import { PrivateTagUncheckedCreateWithoutEnergiesInputSchema } from './PrivateTagUncheckedCreateWithoutEnergiesInputSchema';
import { PrivateTagCreateOrConnectWithoutEnergiesInputSchema } from './PrivateTagCreateOrConnectWithoutEnergiesInputSchema';
import { PrivateTagUpsertWithoutEnergiesInputSchema } from './PrivateTagUpsertWithoutEnergiesInputSchema';
import { PrivateTagWhereUniqueInputSchema } from './PrivateTagWhereUniqueInputSchema';
import { PrivateTagUpdateToOneWithWhereWithoutEnergiesInputSchema } from './PrivateTagUpdateToOneWithWhereWithoutEnergiesInputSchema';
import { PrivateTagUpdateWithoutEnergiesInputSchema } from './PrivateTagUpdateWithoutEnergiesInputSchema';
import { PrivateTagUncheckedUpdateWithoutEnergiesInputSchema } from './PrivateTagUncheckedUpdateWithoutEnergiesInputSchema';

export const PrivateTagUpdateOneRequiredWithoutEnergiesNestedInputSchema: z.ZodType<Prisma.PrivateTagUpdateOneRequiredWithoutEnergiesNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrivateTagCreateWithoutEnergiesInputSchema),z.lazy(() => PrivateTagUncheckedCreateWithoutEnergiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PrivateTagCreateOrConnectWithoutEnergiesInputSchema).optional(),
  upsert: z.lazy(() => PrivateTagUpsertWithoutEnergiesInputSchema).optional(),
  connect: z.lazy(() => PrivateTagWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PrivateTagUpdateToOneWithWhereWithoutEnergiesInputSchema),z.lazy(() => PrivateTagUpdateWithoutEnergiesInputSchema),z.lazy(() => PrivateTagUncheckedUpdateWithoutEnergiesInputSchema) ]).optional(),
}).strict();

export default PrivateTagUpdateOneRequiredWithoutEnergiesNestedInputSchema;
