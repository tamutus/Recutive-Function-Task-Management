import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagWhereInputSchema } from './TagWhereInputSchema';
import { TagUpdateWithoutEnergiesInputSchema } from './TagUpdateWithoutEnergiesInputSchema';
import { TagUncheckedUpdateWithoutEnergiesInputSchema } from './TagUncheckedUpdateWithoutEnergiesInputSchema';

export const TagUpdateToOneWithWhereWithoutEnergiesInputSchema: z.ZodType<Prisma.TagUpdateToOneWithWhereWithoutEnergiesInput> = z.object({
  where: z.lazy(() => TagWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TagUpdateWithoutEnergiesInputSchema),z.lazy(() => TagUncheckedUpdateWithoutEnergiesInputSchema) ]),
}).strict();

export default TagUpdateToOneWithWhereWithoutEnergiesInputSchema;
