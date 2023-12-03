import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagUpdateWithoutPrivateEnergiesInputSchema } from './TagUpdateWithoutPrivateEnergiesInputSchema';
import { TagUncheckedUpdateWithoutPrivateEnergiesInputSchema } from './TagUncheckedUpdateWithoutPrivateEnergiesInputSchema';
import { TagCreateWithoutPrivateEnergiesInputSchema } from './TagCreateWithoutPrivateEnergiesInputSchema';
import { TagUncheckedCreateWithoutPrivateEnergiesInputSchema } from './TagUncheckedCreateWithoutPrivateEnergiesInputSchema';
import { TagWhereInputSchema } from './TagWhereInputSchema';

export const TagUpsertWithoutPrivateEnergiesInputSchema: z.ZodType<Prisma.TagUpsertWithoutPrivateEnergiesInput> = z.object({
  update: z.union([ z.lazy(() => TagUpdateWithoutPrivateEnergiesInputSchema),z.lazy(() => TagUncheckedUpdateWithoutPrivateEnergiesInputSchema) ]),
  create: z.union([ z.lazy(() => TagCreateWithoutPrivateEnergiesInputSchema),z.lazy(() => TagUncheckedCreateWithoutPrivateEnergiesInputSchema) ]),
  where: z.lazy(() => TagWhereInputSchema).optional()
}).strict();

export default TagUpsertWithoutPrivateEnergiesInputSchema;
