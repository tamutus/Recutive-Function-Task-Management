import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagUpdateWithoutPrioritiesInputSchema } from './TagUpdateWithoutPrioritiesInputSchema';
import { TagUncheckedUpdateWithoutPrioritiesInputSchema } from './TagUncheckedUpdateWithoutPrioritiesInputSchema';
import { TagCreateWithoutPrioritiesInputSchema } from './TagCreateWithoutPrioritiesInputSchema';
import { TagUncheckedCreateWithoutPrioritiesInputSchema } from './TagUncheckedCreateWithoutPrioritiesInputSchema';
import { TagWhereInputSchema } from './TagWhereInputSchema';

export const TagUpsertWithoutPrioritiesInputSchema: z.ZodType<Prisma.TagUpsertWithoutPrioritiesInput> = z.object({
  update: z.union([ z.lazy(() => TagUpdateWithoutPrioritiesInputSchema),z.lazy(() => TagUncheckedUpdateWithoutPrioritiesInputSchema) ]),
  create: z.union([ z.lazy(() => TagCreateWithoutPrioritiesInputSchema),z.lazy(() => TagUncheckedCreateWithoutPrioritiesInputSchema) ]),
  where: z.lazy(() => TagWhereInputSchema).optional()
}).strict();

export default TagUpsertWithoutPrioritiesInputSchema;
