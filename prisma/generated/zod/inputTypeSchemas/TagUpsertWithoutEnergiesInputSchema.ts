import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagUpdateWithoutEnergiesInputSchema } from './TagUpdateWithoutEnergiesInputSchema';
import { TagUncheckedUpdateWithoutEnergiesInputSchema } from './TagUncheckedUpdateWithoutEnergiesInputSchema';
import { TagCreateWithoutEnergiesInputSchema } from './TagCreateWithoutEnergiesInputSchema';
import { TagUncheckedCreateWithoutEnergiesInputSchema } from './TagUncheckedCreateWithoutEnergiesInputSchema';
import { TagWhereInputSchema } from './TagWhereInputSchema';

export const TagUpsertWithoutEnergiesInputSchema: z.ZodType<Prisma.TagUpsertWithoutEnergiesInput> = z.object({
  update: z.union([ z.lazy(() => TagUpdateWithoutEnergiesInputSchema),z.lazy(() => TagUncheckedUpdateWithoutEnergiesInputSchema) ]),
  create: z.union([ z.lazy(() => TagCreateWithoutEnergiesInputSchema),z.lazy(() => TagUncheckedCreateWithoutEnergiesInputSchema) ]),
  where: z.lazy(() => TagWhereInputSchema).optional()
}).strict();

export default TagUpsertWithoutEnergiesInputSchema;
