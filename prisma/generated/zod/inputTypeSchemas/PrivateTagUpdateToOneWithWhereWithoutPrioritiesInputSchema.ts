import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagWhereInputSchema } from './PrivateTagWhereInputSchema';
import { PrivateTagUpdateWithoutPrioritiesInputSchema } from './PrivateTagUpdateWithoutPrioritiesInputSchema';
import { PrivateTagUncheckedUpdateWithoutPrioritiesInputSchema } from './PrivateTagUncheckedUpdateWithoutPrioritiesInputSchema';

export const PrivateTagUpdateToOneWithWhereWithoutPrioritiesInputSchema: z.ZodType<Prisma.PrivateTagUpdateToOneWithWhereWithoutPrioritiesInput> = z.object({
  where: z.lazy(() => PrivateTagWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PrivateTagUpdateWithoutPrioritiesInputSchema),z.lazy(() => PrivateTagUncheckedUpdateWithoutPrioritiesInputSchema) ]),
}).strict();

export default PrivateTagUpdateToOneWithWhereWithoutPrioritiesInputSchema;
