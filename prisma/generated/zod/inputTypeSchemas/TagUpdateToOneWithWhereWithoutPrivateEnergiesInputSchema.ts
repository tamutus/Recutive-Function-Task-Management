import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagWhereInputSchema } from './TagWhereInputSchema';
import { TagUpdateWithoutPrivateEnergiesInputSchema } from './TagUpdateWithoutPrivateEnergiesInputSchema';
import { TagUncheckedUpdateWithoutPrivateEnergiesInputSchema } from './TagUncheckedUpdateWithoutPrivateEnergiesInputSchema';

export const TagUpdateToOneWithWhereWithoutPrivateEnergiesInputSchema: z.ZodType<Prisma.TagUpdateToOneWithWhereWithoutPrivateEnergiesInput> = z.object({
  where: z.lazy(() => TagWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TagUpdateWithoutPrivateEnergiesInputSchema),z.lazy(() => TagUncheckedUpdateWithoutPrivateEnergiesInputSchema) ]),
}).strict();

export default TagUpdateToOneWithWhereWithoutPrivateEnergiesInputSchema;
