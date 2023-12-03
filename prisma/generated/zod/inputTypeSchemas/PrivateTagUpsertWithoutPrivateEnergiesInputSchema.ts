import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagUpdateWithoutPrivateEnergiesInputSchema } from './PrivateTagUpdateWithoutPrivateEnergiesInputSchema';
import { PrivateTagUncheckedUpdateWithoutPrivateEnergiesInputSchema } from './PrivateTagUncheckedUpdateWithoutPrivateEnergiesInputSchema';
import { PrivateTagCreateWithoutPrivateEnergiesInputSchema } from './PrivateTagCreateWithoutPrivateEnergiesInputSchema';
import { PrivateTagUncheckedCreateWithoutPrivateEnergiesInputSchema } from './PrivateTagUncheckedCreateWithoutPrivateEnergiesInputSchema';
import { PrivateTagWhereInputSchema } from './PrivateTagWhereInputSchema';

export const PrivateTagUpsertWithoutPrivateEnergiesInputSchema: z.ZodType<Prisma.PrivateTagUpsertWithoutPrivateEnergiesInput> = z.object({
  update: z.union([ z.lazy(() => PrivateTagUpdateWithoutPrivateEnergiesInputSchema),z.lazy(() => PrivateTagUncheckedUpdateWithoutPrivateEnergiesInputSchema) ]),
  create: z.union([ z.lazy(() => PrivateTagCreateWithoutPrivateEnergiesInputSchema),z.lazy(() => PrivateTagUncheckedCreateWithoutPrivateEnergiesInputSchema) ]),
  where: z.lazy(() => PrivateTagWhereInputSchema).optional()
}).strict();

export default PrivateTagUpsertWithoutPrivateEnergiesInputSchema;
