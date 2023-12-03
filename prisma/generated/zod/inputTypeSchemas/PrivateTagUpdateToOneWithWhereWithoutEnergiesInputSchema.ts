import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagWhereInputSchema } from './PrivateTagWhereInputSchema';
import { PrivateTagUpdateWithoutEnergiesInputSchema } from './PrivateTagUpdateWithoutEnergiesInputSchema';
import { PrivateTagUncheckedUpdateWithoutEnergiesInputSchema } from './PrivateTagUncheckedUpdateWithoutEnergiesInputSchema';

export const PrivateTagUpdateToOneWithWhereWithoutEnergiesInputSchema: z.ZodType<Prisma.PrivateTagUpdateToOneWithWhereWithoutEnergiesInput> = z.object({
  where: z.lazy(() => PrivateTagWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PrivateTagUpdateWithoutEnergiesInputSchema),z.lazy(() => PrivateTagUncheckedUpdateWithoutEnergiesInputSchema) ]),
}).strict();

export default PrivateTagUpdateToOneWithWhereWithoutEnergiesInputSchema;
