import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTagsWhereUniqueInputSchema } from './EnergiesToTagsWhereUniqueInputSchema';
import { EnergiesToTagsUpdateWithoutTagInputSchema } from './EnergiesToTagsUpdateWithoutTagInputSchema';
import { EnergiesToTagsUncheckedUpdateWithoutTagInputSchema } from './EnergiesToTagsUncheckedUpdateWithoutTagInputSchema';
import { EnergiesToTagsCreateWithoutTagInputSchema } from './EnergiesToTagsCreateWithoutTagInputSchema';
import { EnergiesToTagsUncheckedCreateWithoutTagInputSchema } from './EnergiesToTagsUncheckedCreateWithoutTagInputSchema';

export const EnergiesToTagsUpsertWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.EnergiesToTagsUpsertWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => EnergiesToTagsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => EnergiesToTagsUpdateWithoutTagInputSchema),z.lazy(() => EnergiesToTagsUncheckedUpdateWithoutTagInputSchema) ]),
  create: z.union([ z.lazy(() => EnergiesToTagsCreateWithoutTagInputSchema),z.lazy(() => EnergiesToTagsUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export default EnergiesToTagsUpsertWithWhereUniqueWithoutTagInputSchema;
