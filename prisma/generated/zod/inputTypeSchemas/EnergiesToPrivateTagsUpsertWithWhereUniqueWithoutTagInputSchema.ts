import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToPrivateTagsWhereUniqueInputSchema } from './EnergiesToPrivateTagsWhereUniqueInputSchema';
import { EnergiesToPrivateTagsUpdateWithoutTagInputSchema } from './EnergiesToPrivateTagsUpdateWithoutTagInputSchema';
import { EnergiesToPrivateTagsUncheckedUpdateWithoutTagInputSchema } from './EnergiesToPrivateTagsUncheckedUpdateWithoutTagInputSchema';
import { EnergiesToPrivateTagsCreateWithoutTagInputSchema } from './EnergiesToPrivateTagsCreateWithoutTagInputSchema';
import { EnergiesToPrivateTagsUncheckedCreateWithoutTagInputSchema } from './EnergiesToPrivateTagsUncheckedCreateWithoutTagInputSchema';

export const EnergiesToPrivateTagsUpsertWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.EnergiesToPrivateTagsUpsertWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => EnergiesToPrivateTagsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => EnergiesToPrivateTagsUpdateWithoutTagInputSchema),z.lazy(() => EnergiesToPrivateTagsUncheckedUpdateWithoutTagInputSchema) ]),
  create: z.union([ z.lazy(() => EnergiesToPrivateTagsCreateWithoutTagInputSchema),z.lazy(() => EnergiesToPrivateTagsUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export default EnergiesToPrivateTagsUpsertWithWhereUniqueWithoutTagInputSchema;
