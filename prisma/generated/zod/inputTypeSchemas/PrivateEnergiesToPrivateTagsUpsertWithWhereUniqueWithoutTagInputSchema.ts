import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToPrivateTagsWhereUniqueInputSchema } from './PrivateEnergiesToPrivateTagsWhereUniqueInputSchema';
import { PrivateEnergiesToPrivateTagsUpdateWithoutTagInputSchema } from './PrivateEnergiesToPrivateTagsUpdateWithoutTagInputSchema';
import { PrivateEnergiesToPrivateTagsUncheckedUpdateWithoutTagInputSchema } from './PrivateEnergiesToPrivateTagsUncheckedUpdateWithoutTagInputSchema';
import { PrivateEnergiesToPrivateTagsCreateWithoutTagInputSchema } from './PrivateEnergiesToPrivateTagsCreateWithoutTagInputSchema';
import { PrivateEnergiesToPrivateTagsUncheckedCreateWithoutTagInputSchema } from './PrivateEnergiesToPrivateTagsUncheckedCreateWithoutTagInputSchema';

export const PrivateEnergiesToPrivateTagsUpsertWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsUpsertWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToPrivateTagsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PrivateEnergiesToPrivateTagsUpdateWithoutTagInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsUncheckedUpdateWithoutTagInputSchema) ]),
  create: z.union([ z.lazy(() => PrivateEnergiesToPrivateTagsCreateWithoutTagInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export default PrivateEnergiesToPrivateTagsUpsertWithWhereUniqueWithoutTagInputSchema;
