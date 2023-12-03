import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTagsWhereUniqueInputSchema } from './EnergiesToTagsWhereUniqueInputSchema';
import { EnergiesToTagsUpdateWithoutTaggerInputSchema } from './EnergiesToTagsUpdateWithoutTaggerInputSchema';
import { EnergiesToTagsUncheckedUpdateWithoutTaggerInputSchema } from './EnergiesToTagsUncheckedUpdateWithoutTaggerInputSchema';
import { EnergiesToTagsCreateWithoutTaggerInputSchema } from './EnergiesToTagsCreateWithoutTaggerInputSchema';
import { EnergiesToTagsUncheckedCreateWithoutTaggerInputSchema } from './EnergiesToTagsUncheckedCreateWithoutTaggerInputSchema';

export const EnergiesToTagsUpsertWithWhereUniqueWithoutTaggerInputSchema: z.ZodType<Prisma.EnergiesToTagsUpsertWithWhereUniqueWithoutTaggerInput> = z.object({
  where: z.lazy(() => EnergiesToTagsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => EnergiesToTagsUpdateWithoutTaggerInputSchema),z.lazy(() => EnergiesToTagsUncheckedUpdateWithoutTaggerInputSchema) ]),
  create: z.union([ z.lazy(() => EnergiesToTagsCreateWithoutTaggerInputSchema),z.lazy(() => EnergiesToTagsUncheckedCreateWithoutTaggerInputSchema) ]),
}).strict();

export default EnergiesToTagsUpsertWithWhereUniqueWithoutTaggerInputSchema;
