import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagWhereInputSchema } from './PrivateTagWhereInputSchema';
import { PrivateTagUpdateWithoutPrivateEnergiesInputSchema } from './PrivateTagUpdateWithoutPrivateEnergiesInputSchema';
import { PrivateTagUncheckedUpdateWithoutPrivateEnergiesInputSchema } from './PrivateTagUncheckedUpdateWithoutPrivateEnergiesInputSchema';

export const PrivateTagUpdateToOneWithWhereWithoutPrivateEnergiesInputSchema: z.ZodType<Prisma.PrivateTagUpdateToOneWithWhereWithoutPrivateEnergiesInput> = z.object({
  where: z.lazy(() => PrivateTagWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PrivateTagUpdateWithoutPrivateEnergiesInputSchema),z.lazy(() => PrivateTagUncheckedUpdateWithoutPrivateEnergiesInputSchema) ]),
}).strict();

export default PrivateTagUpdateToOneWithWhereWithoutPrivateEnergiesInputSchema;
