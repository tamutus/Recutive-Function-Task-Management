import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToTagsWhereUniqueInputSchema } from './PrioritiesToTagsWhereUniqueInputSchema';
import { PrioritiesToTagsUpdateWithoutTagInputSchema } from './PrioritiesToTagsUpdateWithoutTagInputSchema';
import { PrioritiesToTagsUncheckedUpdateWithoutTagInputSchema } from './PrioritiesToTagsUncheckedUpdateWithoutTagInputSchema';
import { PrioritiesToTagsCreateWithoutTagInputSchema } from './PrioritiesToTagsCreateWithoutTagInputSchema';
import { PrioritiesToTagsUncheckedCreateWithoutTagInputSchema } from './PrioritiesToTagsUncheckedCreateWithoutTagInputSchema';

export const PrioritiesToTagsUpsertWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.PrioritiesToTagsUpsertWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => PrioritiesToTagsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PrioritiesToTagsUpdateWithoutTagInputSchema),z.lazy(() => PrioritiesToTagsUncheckedUpdateWithoutTagInputSchema) ]),
  create: z.union([ z.lazy(() => PrioritiesToTagsCreateWithoutTagInputSchema),z.lazy(() => PrioritiesToTagsUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export default PrioritiesToTagsUpsertWithWhereUniqueWithoutTagInputSchema;
