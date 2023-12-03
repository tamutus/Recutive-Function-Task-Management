import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagUpdateWithoutEnergiesInputSchema } from './PrivateTagUpdateWithoutEnergiesInputSchema';
import { PrivateTagUncheckedUpdateWithoutEnergiesInputSchema } from './PrivateTagUncheckedUpdateWithoutEnergiesInputSchema';
import { PrivateTagCreateWithoutEnergiesInputSchema } from './PrivateTagCreateWithoutEnergiesInputSchema';
import { PrivateTagUncheckedCreateWithoutEnergiesInputSchema } from './PrivateTagUncheckedCreateWithoutEnergiesInputSchema';
import { PrivateTagWhereInputSchema } from './PrivateTagWhereInputSchema';

export const PrivateTagUpsertWithoutEnergiesInputSchema: z.ZodType<Prisma.PrivateTagUpsertWithoutEnergiesInput> = z.object({
  update: z.union([ z.lazy(() => PrivateTagUpdateWithoutEnergiesInputSchema),z.lazy(() => PrivateTagUncheckedUpdateWithoutEnergiesInputSchema) ]),
  create: z.union([ z.lazy(() => PrivateTagCreateWithoutEnergiesInputSchema),z.lazy(() => PrivateTagUncheckedCreateWithoutEnergiesInputSchema) ]),
  where: z.lazy(() => PrivateTagWhereInputSchema).optional()
}).strict();

export default PrivateTagUpsertWithoutEnergiesInputSchema;
