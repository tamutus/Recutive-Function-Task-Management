import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagWhereInputSchema } from './TagWhereInputSchema';
import { TagUpdateWithoutPrioritiesInputSchema } from './TagUpdateWithoutPrioritiesInputSchema';
import { TagUncheckedUpdateWithoutPrioritiesInputSchema } from './TagUncheckedUpdateWithoutPrioritiesInputSchema';

export const TagUpdateToOneWithWhereWithoutPrioritiesInputSchema: z.ZodType<Prisma.TagUpdateToOneWithWhereWithoutPrioritiesInput> = z.object({
  where: z.lazy(() => TagWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TagUpdateWithoutPrioritiesInputSchema),z.lazy(() => TagUncheckedUpdateWithoutPrioritiesInputSchema) ]),
}).strict();

export default TagUpdateToOneWithWhereWithoutPrioritiesInputSchema;
