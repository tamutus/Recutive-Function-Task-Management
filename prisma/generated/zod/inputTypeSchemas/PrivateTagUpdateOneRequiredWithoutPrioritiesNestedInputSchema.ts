import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagCreateWithoutPrioritiesInputSchema } from './PrivateTagCreateWithoutPrioritiesInputSchema';
import { PrivateTagUncheckedCreateWithoutPrioritiesInputSchema } from './PrivateTagUncheckedCreateWithoutPrioritiesInputSchema';
import { PrivateTagCreateOrConnectWithoutPrioritiesInputSchema } from './PrivateTagCreateOrConnectWithoutPrioritiesInputSchema';
import { PrivateTagUpsertWithoutPrioritiesInputSchema } from './PrivateTagUpsertWithoutPrioritiesInputSchema';
import { PrivateTagWhereUniqueInputSchema } from './PrivateTagWhereUniqueInputSchema';
import { PrivateTagUpdateToOneWithWhereWithoutPrioritiesInputSchema } from './PrivateTagUpdateToOneWithWhereWithoutPrioritiesInputSchema';
import { PrivateTagUpdateWithoutPrioritiesInputSchema } from './PrivateTagUpdateWithoutPrioritiesInputSchema';
import { PrivateTagUncheckedUpdateWithoutPrioritiesInputSchema } from './PrivateTagUncheckedUpdateWithoutPrioritiesInputSchema';

export const PrivateTagUpdateOneRequiredWithoutPrioritiesNestedInputSchema: z.ZodType<Prisma.PrivateTagUpdateOneRequiredWithoutPrioritiesNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrivateTagCreateWithoutPrioritiesInputSchema),z.lazy(() => PrivateTagUncheckedCreateWithoutPrioritiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PrivateTagCreateOrConnectWithoutPrioritiesInputSchema).optional(),
  upsert: z.lazy(() => PrivateTagUpsertWithoutPrioritiesInputSchema).optional(),
  connect: z.lazy(() => PrivateTagWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PrivateTagUpdateToOneWithWhereWithoutPrioritiesInputSchema),z.lazy(() => PrivateTagUpdateWithoutPrioritiesInputSchema),z.lazy(() => PrivateTagUncheckedUpdateWithoutPrioritiesInputSchema) ]).optional(),
}).strict();

export default PrivateTagUpdateOneRequiredWithoutPrioritiesNestedInputSchema;
