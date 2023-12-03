import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagUpdateWithoutPrioritiesInputSchema } from './PrivateTagUpdateWithoutPrioritiesInputSchema';
import { PrivateTagUncheckedUpdateWithoutPrioritiesInputSchema } from './PrivateTagUncheckedUpdateWithoutPrioritiesInputSchema';
import { PrivateTagCreateWithoutPrioritiesInputSchema } from './PrivateTagCreateWithoutPrioritiesInputSchema';
import { PrivateTagUncheckedCreateWithoutPrioritiesInputSchema } from './PrivateTagUncheckedCreateWithoutPrioritiesInputSchema';
import { PrivateTagWhereInputSchema } from './PrivateTagWhereInputSchema';

export const PrivateTagUpsertWithoutPrioritiesInputSchema: z.ZodType<Prisma.PrivateTagUpsertWithoutPrioritiesInput> = z.object({
  update: z.union([ z.lazy(() => PrivateTagUpdateWithoutPrioritiesInputSchema),z.lazy(() => PrivateTagUncheckedUpdateWithoutPrioritiesInputSchema) ]),
  create: z.union([ z.lazy(() => PrivateTagCreateWithoutPrioritiesInputSchema),z.lazy(() => PrivateTagUncheckedCreateWithoutPrioritiesInputSchema) ]),
  where: z.lazy(() => PrivateTagWhereInputSchema).optional()
}).strict();

export default PrivateTagUpsertWithoutPrioritiesInputSchema;
