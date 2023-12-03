import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTagsWhereUniqueInputSchema } from './PrivateEnergiesToTagsWhereUniqueInputSchema';
import { PrivateEnergiesToTagsUpdateWithoutTagInputSchema } from './PrivateEnergiesToTagsUpdateWithoutTagInputSchema';
import { PrivateEnergiesToTagsUncheckedUpdateWithoutTagInputSchema } from './PrivateEnergiesToTagsUncheckedUpdateWithoutTagInputSchema';
import { PrivateEnergiesToTagsCreateWithoutTagInputSchema } from './PrivateEnergiesToTagsCreateWithoutTagInputSchema';
import { PrivateEnergiesToTagsUncheckedCreateWithoutTagInputSchema } from './PrivateEnergiesToTagsUncheckedCreateWithoutTagInputSchema';

export const PrivateEnergiesToTagsUpsertWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.PrivateEnergiesToTagsUpsertWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToTagsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PrivateEnergiesToTagsUpdateWithoutTagInputSchema),z.lazy(() => PrivateEnergiesToTagsUncheckedUpdateWithoutTagInputSchema) ]),
  create: z.union([ z.lazy(() => PrivateEnergiesToTagsCreateWithoutTagInputSchema),z.lazy(() => PrivateEnergiesToTagsUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export default PrivateEnergiesToTagsUpsertWithWhereUniqueWithoutTagInputSchema;
